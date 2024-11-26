import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div>
        <p className="text-4xl font-bold text-black text-center">
          Aucune page trouvé à cette adresse
        </p>
        <Link to="/">
          <button className="mt-10 w-fit px-5 h-10 rounded bg-black text-white flex items-center justify-center">
            Retour à la page d'acceuil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
