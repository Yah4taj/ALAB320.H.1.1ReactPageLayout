
import React from "react";
function EmployeeListItem({ name, position, image }) {
    return (
        <div>
          <img src={image}  />
          <div>
            <h2>{name}</h2>
            <p >{position}</p>
          </div>
        </div>
      );
    };
  export default EmployeeListItem