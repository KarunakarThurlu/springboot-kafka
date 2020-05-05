import React from "react";

function Logout() {
  let obj = ["asd", "asddd", 1, 4.5, "rty"];
  obj.forEach((e) => {
    console.log(e);
  });
  return (
    <div>
      {obj.map((e) => (
        <h2>{e}</h2>
      ))}
    </div>
  );
}

export default Logout;
