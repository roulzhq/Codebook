export type ExecuteCellFunction = (code: string) => string;

export interface WasmSuite {
  executeCell: ExecuteCellFunction;
}