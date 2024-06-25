import { Input, Button } from "antd";
import {useCallback, useEffect, useState} from "react";
import { cNode, JsonObject } from '../types';
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectObj, setObject } from "../store/objSlice.ts";
import ReactFlow, { Controls, Background,applyEdgeChanges,applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
const NODE_WIDTH = 100;

const ObjectComponent = () => {

    const [inputObj, setInputObj] = useState<string>("");
    const dispatch = useDispatch();
    const object = useSelector(selectObj);
    const [tree, setTree] = useState<cNode | null>(null);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const[selectedNode ,setSelectedNode] = useState(null);


    function handleObject(e: React.ChangeEvent<HTMLInputElement>) {
        setInputObj(e.target.value);
    }

    function handleSubmitObj() {
        let objParsed: JsonObject;

        if (inputObj.toString().length === 0) {
            console.error("Error: parsing input data. Data is empty.");
            return;
        }

        try {
            objParsed = JSON.parse(inputObj);
            dispatch(setObject(objParsed));
        } catch (error) {
            console.error("Error: parsing input data. Invalid data format.");
        }
    }
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    function constructTree(object: any, parent: cNode, id: string, level: number): cNode {
        const root = parent;
        const keys = Object.keys(object);

        keys.forEach((key, index) => {
            const childId = `${id}-${index + 1}`;
            // Calculate x and y positions for pyramid structure
            const x = ((window.innerWidth / 2 - NODE_WIDTH ) + (index - keys.length / 2) * 300) ; // Adjust spacing as needed
            const y = 30 + level * 100; // Adjust vertical spacing as needed
            const childNode = new cNode(key, root, childId, x, y);
            root.add(childNode);
            if (object[key] && typeof object[key] === 'object') {
                constructTree(object[key], childNode, childId, level + 1);
            }
        });

        return root;
    }

    function generateNodesAndEdges(tree, nodes = [], edges = []) {
        if (!tree) return { nodes, edges };

        const newNode = {
            id: tree.id,
            position: { x: tree.x, y:tree.y },
            data: { label: tree.data },
            style:{width:NODE_WIDTH}
        };
        nodes.push(newNode);
        //
        if (tree.children.length > 0) {
            tree.children.forEach(child => {
                edges.push({ id: `${tree.id}-${child.id}`, source: tree.id, target: child.id });
                generateNodesAndEdges(child, nodes, edges);
            });
        }

        return { nodes, edges };
    }

    useEffect(() => {
        if (object && typeof object === 'object') {

            const root = constructTree(object, new cNode("Root", null, "0", 0, 30), "0", 1);
            setTree(root);

            const { nodes, edges } = generateNodesAndEdges(root);
            setNodes(nodes);
            setEdges(edges);

        }
    }, [object]);

    const onNodeClick = (event, node) => {
        console.log("Node clicked:", node);
        // Perform any action needed on node click
        setSelectedNode(node);
    };

    return (
        <main className={"w-full h-full"}>
            <div className={"flex justify-center w-[70vw] mx-auto"}>
                <div className={"w-[400px] mt-[20px] flex gap-2 items-center"}>
                    <Input size={"large"} placeholder={"Object"} className={"h-full"} onChange={handleObject} />
                    <Button className={"bg-blue-400 h-full text-gray-100"} onClick={handleSubmitObj}>Submit</Button>
                </div>
            </div>

            <div className="w-full h-[550px]  my-4">
                <ReactFlow nodes={nodes} edges={edges} onNodeClick={onNodeClick}  onNodesChange={onNodesChange}  onEdgesChange={onEdgesChange}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </main>
    );
};

export default ObjectComponent;
