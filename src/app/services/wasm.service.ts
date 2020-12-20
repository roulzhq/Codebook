import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WasmService {
  public go = new Go();

  constructor() {}

  public async run(): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
    return WebAssembly.instantiateStreaming(
      fetch('assets/codebook.wasm'),
      this.go.importObject
    );
  }
}
