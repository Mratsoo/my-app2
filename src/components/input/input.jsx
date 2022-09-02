import { useState } from "react";

const Input = () => {
  const [AddInput, setAddInput] = useState("");

  const handleOnChange = () => {
    setAddInput(AddInput);
  };

  return (
    <>
      <input
        type="text"
        className=""
        onChange={(handleOnChange) => setAddInput(handleOnChange.target.value)}
      ></input>
      <div>{AddInput}</div>
    </>
  );
};

export default Input;
