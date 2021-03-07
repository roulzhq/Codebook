import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CreateVmFunction, WasmJsVM, WasmSuite } from '../models/WASM';

@Injectable({
  providedIn: 'root',
})
export class WasmService {
  private Suite: WasmSuite;

  public ready: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.init().then((_) => {
      this.ready.next(true);
    });
  }

  private async init() {
    let go = new Go();

    return WebAssembly.instantiateStreaming(
      fetch('assets/Codebook.wasm'),
      go.importObject
    ).then((res) => {
      go.run(res.instance);      

      this.Suite = {
        createVm: wasm_create_vm as CreateVmFunction,
      };
    });
  }
  
  public register(): WasmJsVM {
    return this.Suite.createVm()
  }
}
