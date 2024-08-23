import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", query);
    // Aquí puedes añadir la lógica para manejar la búsqueda
  };

  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="form-control"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Search;
