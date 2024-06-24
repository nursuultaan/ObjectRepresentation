import { useXarrow } from "react-xarrows";
import Draggable from "react-draggable";




const Node= ({ text, id, attributes, object,setClickedNode ,parent,node ,addNodesToScreen}) => {
    const updateXarrow = useXarrow();


    function handleDoubleClick(){
        setClickedNode(node);

        if(node.children.length!=0){
           console.log("{}");
           addNodesToScreen(text)
        }else{
            console.log("key[value]");
            addNodesToScreen(text,object)
        }
    }


    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow} >
            <div className={"relative group m-10"} onDoubleClick={() => handleDoubleClick()} >
                <div
                    className="w-[100px] h-[100px] p-2 bg-gray-500 rounded-xl text-gray-100 flex justify-center items-center"
                    id={id}>
                    <p>{text} - {id}</p>
                </div>

            </div>
        </Draggable>
    );
};

export default Node;
