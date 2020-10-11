import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

import { Codebook as cb } from '../models/Codebook';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CodebookService {
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
}
