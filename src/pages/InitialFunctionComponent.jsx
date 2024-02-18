import React, { useState } from "react";

function InitialFunctionComponent() {
  const [firstName, SetFirstName] = useState("Sabari");
  return (
    <div>
      <h1 className="text-lg font-medium">Welcome, {firstName}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel quos
        veniam iste quia cum, officiis esse sunt perspiciatis unde rem
        repellendus dolores delectus ex odit molestiae tempore maxime adipisci.
        <span className="text-blue-500" onClick={() => SetFirstName("Ganesan")}>
          Change
        </span>
      </p>
    </div>
  );
}

export default InitialFunctionComponent;
