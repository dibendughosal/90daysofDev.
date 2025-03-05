import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { useState } from "react";


export default function Tag() {
  
  const [tag, setTag] = useState('');
  const [fetchData, loading, src] = useGif(tag);

  function changeHandler(e){
    setTag(e.target.value);
  }

  return (
    <div className="flex flex-col items-center w-1/2 bg-blue-500 mx-auto gap-y-5 border border-black rounded-lg mt-4">
      <h2 className="pt-2 font-bold text-2xl uppercase underline">Random GIF</h2>

      {
        loading ? (<Spinner/>) : (<img src={src} alt="Random GIF" width="450px"/>)
      }

      <input className="bg-gray-200 w-9/12 text-center font-bold px-8 py-2 text-lg rounded-md mb-5" onChange={changeHandler} value={tag} placeholder="Enter name to search the GIF"/>
      <button onClick={() => fetchData()} className="bg-gray-200 w-9/12 font-bold px-8 py-2 text-lg rounded-md mb-5">Generate</button>
    </div>
  )  
}
