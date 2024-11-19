import React from 'react'

const BoutonCustom = ({ textBouton, fonctionChangement, choix, valeur }) => {
  return (
    <button
      className={`w-fit px-5 h-8 hover:bg-white text-black text-sm font-bold flex items-center justify-center rounded-md ${choix === valeur ? "bg-white" : "bg-transparent"
        }`}
      onClick={() => fonctionChangement(valeur)}
    >
      {textBouton}
    </button>
  )
}

export default BoutonCustom