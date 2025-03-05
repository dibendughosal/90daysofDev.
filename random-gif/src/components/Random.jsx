import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Random() {

  const [fetchData, loading, src] = useGif();

  return (
    <div className="flex flex-col items-center w-1/2 bg-green-500 mx-auto gap-y-5 border border-black rounded-lg mt-4">
      <h2 className="pt-2 font-bold text-2xl uppercase underline">A Random GIF</h2>

      {
        loading ? (<Spinner/>) : (<img src={src} alt="Random GIF" width="450px"/>)
      }
    
      <button onClick={()=> fetchData()} className="bg-gray-200 w-9/12 font-bold px-8 py-2 text-lg rounded-md mb-5">Generate</button>
    </div>
  )  
}
