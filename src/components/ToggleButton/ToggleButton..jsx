import { useState } from "react";

const HandleAdd = ({}) => {
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
    {toggle ? (
  <button onClick={handleClick}>Add</button>
  ) : (
    <button onClick={handleClick}>Remove</button>
  )}
  
  </div>

  );
}
export default HandleAdd