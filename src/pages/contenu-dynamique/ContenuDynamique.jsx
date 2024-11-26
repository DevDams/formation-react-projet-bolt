import React from "react";
import { useParams } from "react-router-dom";

const ContenuDynamique = () => {
  let miaou = useParams();

  return (
    <div className="w-full h-96 flex items-center justify-center">
      <p className="text-4xl font-bold text-black">
        Le nom afficher est {miaou.chocolat}
      </p>
    </div>
  );
};

export default ContenuDynamique;
