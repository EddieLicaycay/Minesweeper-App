import React from 'react';

const Cell = (details) => {
  const style = {
    cellStyle: {
      width: 40,
      height: 40,
      background: "grey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  };
  
  return (
    <div style={style.cellStyle}>
      {details.value}
    </div>
  )
};

export default Cell;