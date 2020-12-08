import React from "react";

export default ({ input, meta: { touched, error }, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type="text" />
      <div className="red-text">{touched && error ? error : ""}</div>
    </div>
  );
};
