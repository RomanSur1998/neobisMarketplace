import React, { useState } from "react";

const Field = ({ classModule, name, type, formik, placeholder }) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <>
      <input
        className="input field"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </>
  );
};

export default Field;
