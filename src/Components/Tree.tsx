import Node from "./Node.tsx";
import {useSelector} from "react-redux";
import {selectObj} from "../store/objSlice.ts";
import {useEffect, useState} from "react";

const Tree = () => {

    const object = useSelector(selectObj);

    useEffect(()=>{
        console.log("tree :",object);

    },[object])

    return (
        <div>
            <Node/>
        </div>
    );
};

export default Tree;