import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [res, SetRes] = useState(0);
  const [pes, SetPes] = useState();

  
  async function calculateDuo(num){
    axios.post("http://localhost:9090/api/calc", {
      "num": num
    }).then(response => {
      SetRes(response.data.resulty)
    }).catch(erro =>{
      console.log(erro.response)
    })
  }


  return (

    <div className="w-full flex flex-col items-center">
      <div className="mt-10 text-2xl font-bold">Entre com o número</div>
      <input type="number" onChange={(e) => SetPes(e.target.value)} className="text-center w-full sm:w-2/3 lg:w-1/3 mt-5 bg-gray-50 border-black border-2 rounded-lg"></input>
      <button onClick={() =>  calculateDuo(pes)} className="mt-5 bg-black text-white px-10 py-3 rounded-lg">Encontre!</button>

      {/* Result */}
      <div className="flex">
        <div className="mt-10 text-2xl">O primeiro Duodigito multipli eh: </div> 
        <div className="ml-2 mt-10 text-2xl font-bold">{res}</div>
      </div>
    </div>
  )
}