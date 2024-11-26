import React, { useState } from "react";

const Formulaire = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    telephone: ""
  });

  const afficherInfo = () => {
    console.log('INFO ====', userInfo)
    alert('Formulaire incomplet')
  }

  const miseAjourState = (e) => {
    if (e.target.name === 'email') {
      setUserInfo(prev => ({
        ...prev,
        email: e.target.value
      }))
    } else if (e.target.name === 'telephone') {
      setUserInfo(precedent => ({
        ...precedent,
        telephone: e.target.value
      }))
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-96 mx-auto h-fit bg-gray-100 border p-4">
        <input
          type="email"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
          value={userInfo.email}
          onChange={miseAjourState}
        />

        <input
          type=""
          name="telephone"
          className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="0778812111"
          value={userInfo.telephone}
          onChange={miseAjourState}
        />

        <p className="mt-4">Email utilisateur: {userInfo.email}</p>
        <p className="mt-4">Téléphone utilisateur: {userInfo.telephone}</p>

        <button
          className="mt-5 w-full h-9 bg-black text-white font-bold"
          onClick={afficherInfo}
        >
          Soumettre
        </button>
      </div>
    </div>
  );
};

export default Formulaire;
