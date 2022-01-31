/**
 * Maps input through `cb` function, but only entries whose index is specified in `changedIndexes`
 */
export declare const mapChanged: <T>(input: T[], changedIndexes: number[], cb: (item: T, index: number, processed: T[]) => T) => T[];
