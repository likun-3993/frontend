import React, { useState } from "react";
import Context from "./Context";

function ContextHolder(props) {
  // const [expand, setExpand] = useState();
  const [status, setStatus] = useState('');
  console.log(status);
  return (
    <Context.Provider value={{ status, setStatus }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextHolder;
