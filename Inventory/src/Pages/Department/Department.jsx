import { useContext } from "react";
import "./department.css";
import { DataContext } from "../../ContextProvider/ContextProvider";

export const Department = () =>{

    const {buttonDepartHandler} = useContext(DataContext);
    return(
        <div className="Dash-container">
        <button className="depart-button" onClick={()=>buttonDepartHandler("Kitchen")}>Kitchen</button>
        <button className="depart-button" onClick={()=>buttonDepartHandler("Clothing")}>Clothing</button>
        <button className="depart-button" onClick={()=>buttonDepartHandler("Toys")}>Toys</button>
    </div>
    )
}