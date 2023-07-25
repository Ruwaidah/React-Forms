import { useState } from "react";
import Box from "../Box/Box";
import NewBoxForm from "../NewBoxForm/NewBoxForm";
import "./BoxList.css";
const BoxList = () => {
  const [boxs, setBoxs] = useState([]);
  const addBox = (newBox) => {
    setBoxs([...boxs, newBox]);
  };

  const deleteBox = (i) => setBoxs(boxs.filter((box, index) => index !== i));
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <div className="BoxList-div">
        {boxs.map((box, idx) => (
          <Box box={box} key={idx} idx={idx} deleteBox={deleteBox} />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
