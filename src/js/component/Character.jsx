import React, { useContext, useEffect } from "react";
import { CardCharacter } from "./CardCharacter.jsx";
import { Context } from "../store/appContext";

export const Character = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <>
      <div className="container bg-gradient p-4 rounded">
        <div className="row align-items-start">
          <h2 className="mb-3 text-danger">Characters</h2>
        </div>
        <div className="row flex-nowrap overflow-auto">
          {store.characters &&
            store.characters.length > 0 &&
            store.characters.map((character, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <CardCharacter
                  key={character.id || index}
                  name={character.name}
                  id={character.id}
                  uid={character.uid}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
