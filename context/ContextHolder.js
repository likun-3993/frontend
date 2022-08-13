import React, { useState } from "react";
import Context from "./Context";

function ContextHolder(props) {
  const [status, setStatus] = useState();
  const [data, setData] = useState();
  const [fata, setFata] = useState();
  const [post, setPost] = useState();
  return (
    <Context.Provider
      value={{ status, setStatus, data, setData, post, setPost, fata, setFata }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextHolder;
