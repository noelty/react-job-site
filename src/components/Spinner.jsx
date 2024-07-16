import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override = {
  display: 'block',
  margin: '100px auto'
}

const Spinner = ({loading}) => {

  return (
    <MoonLoader 
      loading = {loading}
      cssOverride = {override}
      color = "#4616ac"
    />
  )
};

export default Spinner;
