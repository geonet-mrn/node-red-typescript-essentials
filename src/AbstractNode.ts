import { NodeStatus } from "./node_status"


export abstract class AbstractNode {

    // API reference: https://nodered.org/docs/user-guide/writing-functions

    id!: string
    name!: string
    wires! : []

    private context!: Function

    on!: (event: string, handler: Function) => void

    done!: (msg: any) => void
    send!: (msg: any) => void

    status!: (status: NodeStatus) => void

    //########### BEGIN Log methods ##########
    debug!: (msg: any) => void
    error!: (err: string, msg: any) => void
    log!: (msg: any) => void
    warn!: (msg: any) => void
    trace!: (msg: any) => void
    //########### END Log methods ##########


    //################# BEGIN properties to access context ################

    // https://nodered.org/docs/creating-nodes/context

    getNodeContext(): any {
        return this.context();
    }

    getFlowContext(): any {
        return this.context().flow;
    }

    getGlobalContext(): any {
        return this.context().global;
    }
    //################# END properties to access context ################


    // TODO: 3 Define 'AbstractNode' type for the result array here?
    getNextNodes(): [] {

        let result: any = []

        this.RED.nodes.eachNode((node: any) => {

            // TODO: 3 Finish this

            for (let wire of this.wires) {
                for (let id of wire as []) {
                    if (id == node.id) {
                        result.push(node)
                    }
                }
            }

        });

        return result
    }


    // TODO: 3 Define 'AbstractNode' type for the result array here?
    getPrevNodes(): [] {

        let result: any = []

        this.RED.nodes.eachNode((node: any) => {

            if (node.wires == undefined) {
                return
            }

            for (let wire of node.wires) {
                for (let id of wire) {
                    if (id == this.id) {
                        result.push(node)
                    }
                }
            }

        });

        return result
    }


    // TODO: 4 Decide whether "config" in AbstractNode should be a class member or not. "config" *is* a class
    // member in all derived classes, but can have a different type there. What is the best/correct solution here?
    constructor(config: any, public RED: any) {

        RED.nodes.createNode(this, config);
    }
}