import "./Box.css";
const Box = (props) => {
  console.log(props.box.width);
  return (
    <div className="Box">
      <div
        style={{
          background: props.box.color,
          width: props.box.width + "px",
          height: props.box.height + "px",
        }}
      ></div>
      <button
        style={{
          width: props.box.width + "px",
        }}
        onClick={() => props.deleteBox(props.idx)}
      >
        X
      </button>
    </div>
  );
};

export default Box;
