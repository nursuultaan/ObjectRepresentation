export interface JsonObject {
    [key: string]: any;
}


export interface NodeProps{
    text:string,
    id:number,
    attributes : null | string[],
    object : JsonObject | null,
    setClickedNode:()=> void
}




export class cNode {
    data:string;
    children:cNode[];
    parent:cNode;
    id:number|string;
    x:number;
    y:number;

    constructor(data:string,parent:cNode,id:number,x,y) {
        this.data = data;
        this.children = [];
        this.parent = parent;
        this.id = id;
        this.x = x;
        this.y = y;
    }

    add(node:cNode) {
        this.children.push(node);

    }
    remove(data:string) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
    toString(){
        return{data:this.data,id:this.id,children:this.children,parent:this.parent};


    }
}

export interface Attributes{
    attributes:string[]|null
}