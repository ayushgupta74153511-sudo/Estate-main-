import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compare, setCompare] = useLocalStorage("compare", []);

  const addToCompare = (property) => {
    if (compare.length >= 3) return;
    if (!compare.find((item) => item.id === property.id)) {
      setCompare([...compare, property]);
    }
  };

  const removeFromCompare = (id) => {
    setCompare(compare.filter((item) => item.id !== id));
  };

  const clearCompare = () => {
    setCompare([]);
  };

  return (
    <CompareContext.Provider
      value={{ compare, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);