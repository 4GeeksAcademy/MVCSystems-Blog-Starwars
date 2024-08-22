import React from "react";
import DetallePlanets from "../component/DetallePlanets.jsx";
import { useParams } from "react-router-dom";

const ViewPlanets = () => {
  const { uid } = useParams(); // Obtén el parámetro 'id'
  return (
    <>
      <DetallePlanets id={uid} /> {/* Pasa el parámetro 'id' */}
    </>
  );
};

export default ViewPlanets;
