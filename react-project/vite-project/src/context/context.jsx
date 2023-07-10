/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { colorReducer } from "../reducer/Reducer";

export const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
  const [colors, dispatch] = useReducer(colorReducer, []);
  const values = { colors, dispatch };
  return (
    <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
  );
};
