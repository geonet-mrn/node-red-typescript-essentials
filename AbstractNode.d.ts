import { NodeStatus } from "./node_status";
export declare abstract class AbstractNode {
    RED: any;
    id: string;
    name: string;
    wires: [];
    private context;
    on: (event: string, handler: Function) => void;
    done: (msg: any) => void;
    send: (msg: any) => void;
    status: (status: NodeStatus) => void;
    debug: (msg: any) => void;
    error: (err: string, msg: any) => void;
    log: (msg: any) => void;
    warn: (msg: any) => void;
    trace: (msg: any) => void;
    getNodeContext(): any;
    getFlowContext(): any;
    getGlobalContext(): any;
    getNextNodes(): [];
    getPrevNodes(): [];
    constructor(config: any, RED: any);
}
