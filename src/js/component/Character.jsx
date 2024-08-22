import React, { useContext, useEffect } from "react";
import { CardCharacter } from "./CardCharacter.jsx";
import { Context } from "../store/appContext";

export const Character = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters(); // Asegúrate de pasar un id válido
  }, []);

  return (
    <div className="container bg-gradient p-4 rounded">
      <div className="row align-items-start">
        <div className="col-12">
          <h2 className="mb-3 text-danger">Characters</h2>
        </div>
        <div className="row flex-nowrap overflow-auto">
          {store.characters &&
            store.characters.length > 0 &&
            store.characters.map((characters, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <CardCharacter
                  key={characters.uid}
                  name={characters.name}
                  gender={characters.gender}
                  hair_color={characters.hair_color}
                  eye_color={characters.eye_color}
                  uid={characters.uid}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
