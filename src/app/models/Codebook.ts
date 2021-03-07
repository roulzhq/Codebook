export namespace Codebook {
  /**
   * Main definition for Codebooks. This should resemble the JSON data.
   */
  export interface Codebook {
    id: string;
    title: string;
    authorId: string;
    authorName: string;
    metadata: Metadata;
    cells?: Cell[]; // Optional, as they are fetched seperately for the app
  }

  /**
   * A cell within a Codebook
   */
  export interface Cell {
    id: string;
    type: CellType;
    data?: string;
    height?: number;
  }

  /**
   * Types a cell can have. Images, Videos and Visualizations are not yet implemented though.
   */
  export enum CellType {
    JAVASCRIPT,
    TEXT,
    IMAGE,
    VIDEO,
    VISUALIZATION,
  }

  /**
   * Metatada for a Codebook. Not sure if the author should be in here but I don't even care.
   */
  export interface Metadata {
    createDate: Date;
    modifiedDate: Date;
  }
}
