import { useState, useContext, useCallback } from "react";
import { SET_COLOR_TYPES } from "./reducer/Reducer";
import { ColorContext } from "./context/context";
import ColorList from "./components/ColorList";
import "./App.css";

const ColorsList = ["red", "green", "blue", "black", "orange"];

const App = () => {
  const [currentColor, setCurrentColor] = useState("blue");
  const { dispatch } = useContext(ColorContext);

  const handleChange = useCallback(() => {
    let nextColor;
    if (currentColor === "blue") {
      nextColor = "green";
    } else {
      const filteredColors = ColorsList.filter(color => color !== currentColor);
      nextColor =
        filteredColors[Math.floor(Math.random() * filteredColors.length)];
    }

    setCurrentColor(nextColor);
    dispatch({ type: SET_COLOR_TYPES, color: nextColor });
  }, [currentColor, dispatch]);

  return (
    <div className="container">
      <button
        style={{ backgroundColor: currentColor }}
        onClick={handleChange}
        className="btn"
      >
        Change Color !
      </button>
      <div className="color-section">
        <ColorList />
      </div>
    </div>
  );
};

export default App;
