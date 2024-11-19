import { AlarmClock, Ambulance } from "lucide-react";
import NavbarPrincipale from "./composants/NavbarPrincipale";
import { useState } from "react";

function App() {
  const [sectionVisible, setSectionVisible] = useState("CHAUFFEUR");

  const updateSectionVisible = (section) => {
    setSectionVisible(section);
  };
  return (
    <div className="pb-72">
      {/* MENU */}
      <NavbarPrincipale />
      {/* BANNIERE */}
      <div className="relative custom-background bg-red-200 h-fit py-12">
        <div className="z-10 absolute top-0 bg-black/60 w-full h-full"></div>
        <div className="relative z-50 w-10/12 max-w-6xl mx-auto">
          <div className="w-1/2">
            <h1 className="text-6xl text-white font-bold">
              Allez n’importe où en France, à n’importe quelle heure
            </h1>
            <p className="mt-3 text-base font-normal text-white">
              Bolt est l'application de mobilité tout-en-un. En quelques
              minutes, vous êtes pris en charge par un chauffeur offrant un
              service de transport de premier ordre et profitez d'un trajet
              confortable jusqu'à votre destination. Sinon, évitez complètement
              les embouteillages grâce à l'une de nos trottinettes leaders sur
              le marché.
            </p>
            <button className="mt-4 w-44 h-10 bg-green-600 rounded-full text-sm text-white font-bold">
              Télécharger l'appli
            </button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      {/* SECOND SECTION */}
      <div className="mt-20 w-10/12 max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-black text-center">
          Générez des revenus avec Bolt
        </h1>

        <div className="mt-10 flex justify-center gap-6">
          <button
            className={`w-fit px-6 h-9 text-sm font-normal border-2 border-gray-300 rounded-full ${sectionVisible === "CHAUFFEUR"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-600"
              }`}
            onClick={() => updateSectionVisible("CHAUFFEUR")}
          >
            Chauffeur
          </button>
          <button
            className={`w-fit px-6 h-9 text-sm font-normal border-2 border-gray-300 rounded-full ${sectionVisible === "LIVREUR"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-600"
              }`}
            onClick={() => updateSectionVisible("LIVREUR")}
          >
            Livreur
          </button>
          <button
            className={`w-fit px-6 h-9 text-sm font-normal border-2 border-gray-300 rounded-full ${sectionVisible === "PROPRIO"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-600"
              }`}
            onClick={() => updateSectionVisible("PROPRIO")}
          >
            Propriétaire d'un restaurant ou d'un magasin
          </button>
          <button
            className={`w-fit px-6 h-9 text-sm font-normal border-2 border-gray-300 rounded-full ${sectionVisible === "FLOTTE"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-600"
              }`}
            onClick={() => updateSectionVisible("FLOTTE")}
          >
            Propriétaire de flotte
          </button>
        </div>

        <div className="mt-10">
          {sectionVisible === "CHAUFFEUR" && (
            <div className="w-full h-fit bg-green-200 flex">
              <div className="w-1/2 bg-orange-200">image</div>
              <div className="w-1/2 bg-red-200">
                <h1 className="text-2xl font-bold text-black">Augmentez vos ventes</h1>

                
                <div className="mt-5 flex items-start gap-4">
                  <div>
                    <div className="w-6 h-6 rounded-full text-white bg-green-500 flex items-center justify-center">1</div>
                  </div>
                  <div>
                    Touchez de nouveaux clients
                    Des millions de nos utilisateurs commandent de la nourriture ou font leurs courses dans des restaurants et des magasins comme les vôtres.
                  </div>
                </div>


                <div className="mt-5 flex items-start gap-4">
                  <div>
                    <div className="w-6 h-6 rounded-full text-white bg-green-500 flex items-center justify-center">2</div>
                  </div>
                  <div>
                    Touchez de nouveaux clients
                    Des millions de nos utilisateurs commandent de la nourriture ou font leurs courses dans des restaurants et des magasins comme les vôtres.
                  </div>
                </div>


                <div className="mt-5 flex items-start gap-4">
                  <div>
                    <div className="w-6 h-6 rounded-full text-white bg-green-500 flex items-center justify-center">3</div>
                  </div>
                  <div>
                    Touchez de nouveaux clients
                    Des millions de nos utilisateurs commandent de la nourriture ou font leurs courses dans des restaurants et des magasins comme les vôtres.
                  </div>
                </div>
              </div>
            </div>
          )}

          {sectionVisible === "FLOTTE" ? (
            <div className="w-full h-56 bg-violet-200"></div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
