import { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = (props) => {
  const initial = {
    width: "",
    height: "",
    color: "#000000",
  };
  const [formData, setFormData] = useState(initial);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initial);
  };
  return (
    <div className="NewBoxForm">
      <h3>Create New Box</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="width">
          Width:
          <input
            id="width"
            type="number"
            max={300}
            min={20}
            name="width"
            placeholder="width"
            required
            value={formData.width}
            onChange={onChange}
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            id="height"
            type="number"
            max={300}
            min={20}
            name="height"
            value={formData.height}
            placeholder="height"
            required
            onChange={onChange}
          />
        </label>
        <label htmlFor="color">
          Color:
          <input
            id="color"
            value={formData.color}
            name="color"
            type="color"
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewBoxForm;
