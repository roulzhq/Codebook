import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';

import { Codebook as cb } from '../models/Codebook';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CodebookService {
  /**
   * All the users codebooks, without cells and other subcollections.
   * Those must be fetched when needed
   */
  public readonly codebooks: Observable<cb.Codebook[]>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    const currentUser = this.authService.currentUser;

    this.codebooks = this.firestore
      .collection<cb.Codebook>('Codebooks', (ref) =>
        ref.where('authorId', '==', currentUser.uid)
      )
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(), distinctUntilChanged());
  }

  public getCodebookAsObservable(codebookId: string): Observable<cb.Codebook> {
    return this.codebooks.pipe(
      map((codebooks) => codebooks.find((i) => i.id === codebookId))
    );
  }

  public getCodebookCellsObservable(codebookId: string): Observable<cb.Cell[]> {
    const codebookDoc = this.firestore.doc(`Codebooks/${codebookId}`);

    if (codebookDoc) {
      return codebookDoc
        .collection<cb.Cell>('cells')
        .valueChanges({ idField: 'id' })
        .pipe(distinctUntilChanged(), shareReplay());
    }
  }

  public updateCodebookCell(codebookId: string, cellId: string, cell: cb.Cell) {
    if (!codebookId && !cellId) {
      return null;
    }

    const codebookDoc = this.firestore.doc(`Codebooks/${codebookId}`);
    const cellDoc = codebookDoc.collection(`cells`).doc(cellId);

    if (cellDoc) {
      cellDoc.update(cell);
    }
  }

  public updateCodebookTitle(codebookId: string, title: string) {
    if (!codebookId && !title) {
      return null;
    }

    const codebookDoc = this.firestore.doc(`Codebooks/${codebookId}`);

    if (codebookDoc) {
      codebookDoc.update({ title });
    }
  }
}
