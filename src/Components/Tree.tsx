import Node from "./Node";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useState, useEffect } from "react";
import { cNode } from "../types.ts";

const Tree = ({ object, rootName, rootIndex }) => {
    if (object == null) return <></>;

    const[objDisplay,setObjDisplay] = useState({});
    const [clickedNode, setClickedNode] = useState<cNode| null>(null);
    const [tree, setTree] = useState<cNode | null>(null);


    function constructTree(object, parent, id) {
        const root = parent;
        const keys = Object.keys(object);


        keys.forEach((key, index) => {
            const childId = `${id}-${index + 1}`;
            const childNode = new cNode(key, root, childId);
            root.add(childNode);
            if (object[key] && typeof object[key] === 'object') {
                constructTree(object[key], childNode, childId);
            }
        });

        return root;
    }
    console.log(clickedNode);


    useEffect(() => {
        const root = constructTree(object,new cNode("Root",null,"0"),"0");
        setTree(root);
    }, [object]);



    function addNodesToScreen(key,value={}){
        console.log("Double Click");
        console.log("Object:",value);
       // setObjDisplay((prev)=>prev[key]=value)
    }


    function renderTree(node) {
        if (!node) return null;
        return (
            <div key={node.id} className="node-container">
                <Node
                    setClickedNode={setClickedNode}
                    text={node.data}
                    id={String(node.id)}
                    attributes={node.children.map(child => child.data)}
                    object={object[node.data]}
                    parent={node.parent}
                    node={node}
                    addNodesToScreen={addNodesToScreen}
                />
                {node.children.map((child) => (
                    <div key={child.id} className="child-container">
                        {renderTree(child)}
                        <Xarrow start={String(node.id)} end={String(child.id)} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <Xwrapper>
            <div className="tree-container">
                {renderTree(tree)}
            </div>
        </Xwrapper>
    );
};

export default Tree;