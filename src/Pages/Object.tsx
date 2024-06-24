import { Input, Button } from "antd";
import { useState } from "react";
import { JsonObject } from '../types';
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectObj, setObject } from "../store/objSlice.ts";
import Tree from "../Components/Tree.tsx";
import { Xwrapper } from "react-xarrows";

const Object = () => {
    const [inputObj, setInputObj] = useState<string>("");
    const dispatch = useDispatch();

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

    const object = useSelector(selectObj);

    return (
        <main className={"w-full h-full "}>
            <div className={"flex justify-center w-[70vw] mx-auto "}>
                <div className={"w-[400px] mt-[20px] flex gap-2 items-center"}>
                    <Input size={"large"} placeholder={"Object"} className={"h-full"} onChange={handleObject} />
                    <Button className={"bg-blue-400 h-full text-gray-100"} onClick={handleSubmitObj}>Submit</Button>
                </div>
            </div>

                <div className="w-full bg-gray-200 my-5 flex  p-3">
                <Tree object={object} rootIndex={0} />
                </div>

        </main>
    );
};

export default Object;
