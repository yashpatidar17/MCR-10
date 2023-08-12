import { createContext, useState } from "react";
import { inventoryData } from "../Data/inventory";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(inventoryData);
  const [department, setDepartment] = useState("");
  const [low, setLow] = useState("");
  const [name, setName] = useState("");
  console.log(department);

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
    return newData;
  };

  const newSortedData = sortedData();
  return (
    <div>
      <DataContext.Provider
        value={{ data, setDepartment, setLow, setName, newSortedData }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
