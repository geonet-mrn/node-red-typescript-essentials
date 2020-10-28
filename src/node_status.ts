  export enum Shape {
        "ring","dot"
    }

    export enum Fill {
        "red", "green", "yellow", "blue", "grey"
    }

export class NodeStatus {

  

    constructor(public text : string|undefined = undefined, 
                public fill : Fill|undefined = undefined, 
                public shape : Shape|undefined = undefined) {
    }
}

