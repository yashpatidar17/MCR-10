import { useContext } from "react";
import { useParams } from "react-router-dom"
import { DataContext } from "../../ContextProvider/ContextProvider";
import "./product.css"
export const Product = () =>{
    const {ID} = useParams();
    const {data} = useContext(DataContext);
    const product = data.find((item)=> item.id === parseInt(ID));
    console.log(product);
    return(
        <div className="product-con">
            <h1>{product.name}</h1>
            <img className="product" src={product.imageUrl}/>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Supplier: {product.supplier}</p>
            <p>Department: {product.department}</p>
            <p>SKU: {product.sku}</p>
            <p>Delivered: {product.delivered}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}