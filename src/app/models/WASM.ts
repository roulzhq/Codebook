export interface WasmJsVM {
  execute: (code: string) => string;
  clear: () => boolean;
}

export type CreateVmFunction = () => WasmJsVM;

export interface WasmSuite {
  createVm: CreateVmFunction;
}
