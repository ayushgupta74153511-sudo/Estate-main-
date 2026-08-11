import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  const addToWishlist = (property) => {
    if (!wishlist.find((item) => item.id === property.id)) {
      setWishlist([...wishlist, property]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);