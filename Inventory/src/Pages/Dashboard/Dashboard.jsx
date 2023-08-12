
import { useContext } from "react";
import "./dashboard.css";
import { DataContext } from "../../ContextProvider/ContextProvider";

export const Dashboard = () =>{
    const {data} =useContext(DataContext);
    const stockCount = data.reduce((acc,curr)=> acc+curr.stock, 0);
    const delivered = data.reduce((acc,curr)=>acc+curr.delivered, 0);
    const lowStock = data.filter((item)=> item.stock<=10);


    console.log(stockCount,delivered,lowStock.length);
    return(
        <div className="Dash-container">
            <div className="info-container">
                <h1 className="stock">{stockCount}</h1>
                <h2 className="text">Total Stock</h2>
            </div>
            <div className="info-container">
                <h1 className="del">{delivered}</h1>
                <h2 className="text">Total Delivered</h2>
            </div>
            <div className="info-container">
                <h1 className="low">{lowStock.length}</h1>
                <h2 className="text">Low Stock Items</h2>
            </div>
        </div>
    )
}