declare module 'pdf-parse' {
  interface PDFData {
    text: string;
    numpages: number;
    numrender: number;
    info: {
      PDFFormatVersion: string;
      IsAcroFormPresent: boolean;
      IsXFAPresent: boolean;
      [key: string]: unknown;
    };
    metadata: {
      [key: string]: unknown;
    };
    version: string;
  }

  function parse(dataBuffer: Buffer, options?: Record<string, unknown>): Promise<PDFData>;

  export = parse;
}
