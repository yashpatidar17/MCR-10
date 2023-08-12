import { createContext, useState } from "react";
import { inventoryData } from "../Data/inventory";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(inventoryData);
  const [department, setDepartment] = useState("");
  const [low, setLow] = useState("");
  const [name, setName] = useState("");
  const [depa,setDepa] = useState("");
  const navigate= useNavigate();
  console.log(department);

  const buttonDepartHandler = (valueRc)=>{
    setDepartment(valueRc);
    navigate("/products")
}

  const sortedData = () => {
    const newData = [...data];

    if (department === "All") {
      return newData;
    } else if (department === "Kitchen") {
      return newData.filter((item) => item.department === "Kitchen");
    } else if (department === "Toys") {
      return newData.filter((item) => item.department === "Toys");
    } else if (department === "Clothing") {
      return newData.filter((item) => item.department === "Clothing");
    }

    if (name === "name") {
      return newData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (name === "price") {
      return newData.sort((a, b) => b.price - a.price);
    } else if (name === "stock") {
      return newData.sort((a, b) => b.stock - a.stock);
    }

    if(low === "low"){
      return newData.filter((item)=> item.stock<=10)
    }

    return newData;
  };

  

  const newSortedData = sortedData();
  return (
    <div>
      <DataContext.Provider
        value={{ data, setDepartment, setLow, setName, newSortedData,buttonDepartHandler,department }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
