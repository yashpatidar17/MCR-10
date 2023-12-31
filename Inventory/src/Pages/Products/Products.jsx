import { useContext } from "react";
import { DataContext } from "../../ContextProvider/ContextProvider";
import "./products.css";
import { Link } from "react-router-dom";

export const Products = () => {
  const {setDepartment, setLow, setName,newSortedData,department } = useContext(DataContext);
  const departmentHandler = (event)=>{
    setDepartment(event.target.value);
  }
  const nameHandler = (event)=>{
    setName(event.target.value);
  }
  const lowHandler = (event)=>{
    setLow(event.target.value);
  }
  return (
    <div>
      <div className="filters">
        <h2>Products</h2>
        <select onChange={(e)=>departmentHandler(e)} value={department}>
          <option value="All">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>

        <label >
            <input onChange={(e)=>lowHandler(e)} type="checkbox" value="low"/>
            Low Stock Items
        </label>
        <select onChange={(e)=>nameHandler(e)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <button className="newButton">
          New
        </button>
      </div>
      <table className="products-table">
        <thead>
          <tr className="table-tr">
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {newSortedData.map((item) => (
            <tr className="product-row" key={item.id}>
              <td>
                <img
                  className="product-Image"
                  src={item.imageUrl}
                  alt="Product"
                />
              </td>
              <Link className="link-class" to={`/product/${item.id}`}>
                <td className="name">{item.name}</td>
              </Link>

              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
