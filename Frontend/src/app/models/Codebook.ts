namespace Codebook {
  /**
   * Main definition for Codebooks. This should resemble the JSON data.
   */
  export interface Codebook {
    title: string;
    metadata: Metadata;
    cells: Cell[];
  }

  /**
   * A cell within a Codebook
   */
  export interface Cell {
    id: string;
    type: CellType;
    lines?: string[];
    data?: string;
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
    authorId: string;
    authorName: string;
    createDate: Date;
    modifiedDate: Date;
  }
}
