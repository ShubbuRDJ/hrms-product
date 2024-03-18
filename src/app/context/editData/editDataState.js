import { useState } from "react";
import EditDataContext from "./editDataContext";

const EditDataState = (props)=>{
    const [editData, setEditData] = useState("")
    return(
        <EditDataContext.Provider value={{editData, setEditData}}>
            {props.children}
        </EditDataContext.Provider>
    )
}

export default EditDataState;