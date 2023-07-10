import { useContext } from "react";
import { ColorContext } from "../context/context";

const ColorList = () => {
  const { colors } = useContext(ColorContext);

  return (
    <div className="lists">
      <p>Changes colors stores:</p>
      {colors.map((color, i) => (
        <span key={i} style={{ color }}>
          {color}
        </span>
      ))}
    </div>
  );
};

export default ColorList;
