export declare enum Shape {
    "ring" = 0,
    "dot" = 1
}
export declare enum Fill {
    "red" = 0,
    "green" = 1,
    "yellow" = 2,
    "blue" = 3,
    "grey" = 4
}
export declare class NodeStatus {
    text: string | undefined;
    fill: Fill | undefined;
    shape: Shape | undefined;
    constructor(text?: string | undefined, fill?: Fill | undefined, shape?: Shape | undefined);
}
