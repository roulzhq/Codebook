import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { WasmSuite, ExecuteCellFunction } from '../models/WASM';

@Injectable({
  providedIn: 'root',
})
export class WasmService {
  private Suite: WasmSuite;

  public ready: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.init().then(_ => {      
      this.ready.next(true);
    });
  }

  private async init() {
    let go = new Go();

    return WebAssembly.instantiateStreaming(
      fetch('assets/codebook.wasm'),
      go.importObject
    ).then((res) => {
      go.run(res.instance);

      this.Suite = {
        executeCell: cb_execute as ExecuteCellFunction,
      };
    });
  }

  public execute(code: string) {
    return this.Suite.executeCell(code);
  }
}
