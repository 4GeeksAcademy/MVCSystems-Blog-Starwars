import React, { useContext, useEffect } from "react";
import { CardVehicles } from "./CardVehicles.jsx";
import { Context } from "../store/appContext.js";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="container bg-gradient p-4 rounded">
      <div className="row align-items-start">
        <div className="col-12">
          <h2 className="mb-3 text-danger">Vehicles</h2>
        </div>
        <div className="row flex-nowrap overflow-auto">
          {store.vehicles &&
            store.vehicles.length > 0 &&
            store.vehicles.map((vehicles, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <CardVehicles
                  key={vehicles.id || index}
                  name={vehicles.name}
                  id={vehicles.id}
                  uid={vehicles.uid}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
