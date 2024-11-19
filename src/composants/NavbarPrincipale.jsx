import React, { useState } from "react";
import LOGO_BOLT from "./../assets/images/bolt-logo.svg";
import ICON_DRIVER from "./../assets/icons/driver.svg";
import { AlignJustify, ChevronRight, X } from "lucide-react";
import SousMenuService from "./sous-menu/SousMenuService";
import SousMenuEntreprise from "./sous-menu/SousMenuEntreprise";
import BoutonCustom from "./BoutonCustom";

const NavbarPrincipale = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState("SERVICE");

  const ouvrirMenuDynamic = () => {
    setMenuVisible((valeurActuelle) => !valeurActuelle);
  };

  const choixSousMenu = (sousMenu) => {
    setSelectedSubMenu(sousMenu);
  };

  return (
    <div className="z-[999] sticky top-0 w-full h-16 bg-white border-b">
      <div className="relative bg-white z-[99999] w-10/12 max-w-6xl h-full mx-auto flex items-center justify-between">
        <div>
          <img src={LOGO_BOLT} alt="logo" className="w-10" />
        </div>
        <div className="flex items-center gap-7">
          <button className="text-sm hover:bg-gray-100 font-semibold w-24 h-9 rounded-full">
            Support
          </button>
          <button className="text-sm text-white font-semibold bg-gray-800 hover:bg-gray-700 w-24 h-9 rounded-full">
            S'inscrire
          </button>

          {/* BOUTON A FAIRE CHANGER */}
          <button className="" onClick={ouvrirMenuDynamic}>
            {/* <AlignJustify className={!menuVisible ? "block" : "hidden"} />
            <X className={menuVisible ? "block" : "hidden"} /> */}

            {!menuVisible ? (
              <AlignJustify className={"text-black"} />
            ) : (
              <X className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* GIGA MENU BLANC */}
      {menuVisible ? (
        <div className="absolute top-0 z-[0] w-full h-screen bg-white pt-20">
          <div className="w-10/12 max-w-6xl mx-auto h-[80%] flex items-start justify-center gap-6">
            {/* GAUCHE */}
            <div className="w-full h-full bg-red-100 rounded-xl p-10">
              <div className="flex items-center gap-4">
                <BoutonCustom
                  textBouton="Services"
                  fonctionChangement={choixSousMenu}
                  choix={selectedSubMenu}
                  valeur='SERVICE'
                />
                <BoutonCustom
                  textBouton="Générer des revenus avec Bolt"
                  fonctionChangement={choixSousMenu}
                  choix={selectedSubMenu}
                  valeur='GENERER_REVENU'
                />
                <BoutonCustom
                  textBouton="Entreprise"
                  fonctionChangement={choixSousMenu}
                  choix={selectedSubMenu}
                  valeur='ENTREPRISE'
                />
                <BoutonCustom
                  textBouton="Sécurité"
                  fonctionChangement={choixSousMenu}
                  choix={selectedSubMenu}
                  valeur='SECURITE'
                />
                <BoutonCustom
                  textBouton="Support"
                  fonctionChangement={choixSousMenu}
                  choix={selectedSubMenu}
                  valeur='SUPPORT'
                />
                <BoutonCustom
                  textBouton="Villes"
                  fonctionChangement={choixSousMenu}
                  choix={selectedSubMenu}
                  valeur='VILLE'
                />
              </div>

              {/* SERVICE SECTION */}
              {selectedSubMenu === "SERVICE" ? <SousMenuService /> : null}

              {/* ENTREPRISE SECTION */}
              {selectedSubMenu === "ENTREPRISE" ? <SousMenuEntreprise /> : null}
            </div>







            {/* DROITE */}
            <div className="w-80 h-full bg-orange-100 rounded-xl p-4">
              <div className="flex items-start gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
                <div>
                  <img src={ICON_DRIVER} alt="" className="w-5" />
                </div>
                <div>
                  <p className="text-sm text-black font-semibold">
                    Devenir partenaire chauffeur
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Make money on your terms
                  </p>
                </div>
                <div>
                  <ChevronRight size="18" />
                </div>
              </div>
            </div>
          </div>

          {/* MENU FOOTER */}
          <div className="mt-10 w-10/12 max-w-6xl mx-auto bg-bleu-500 flex items-center justify-between gap-6">
            <div>LOGO RÉSEAUX SOCIAUX</div>
            <div>Terms et conditions</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarPrincipale;
