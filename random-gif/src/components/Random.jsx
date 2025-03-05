import axios from "axios";
import { useState } from "react";

export default function Random() {
  async function clickHandler(){
    const response = await axios.get("https://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY_HERE");
    const data = await response.json();
    setSrc(data.data.images.fixed_width.url);
  }
  const [src, setSrc] = useState('');
  return (
    <div className="flex flex-col items-center w-1/2 h-[450px] bg-green-500 mx-auto gap-y-5 border border-black rounded-lg mt-4">
      <h2 className="pt-2 font-bold text-2xl uppercase underline">A Random GIF</h2>
      <img src={src} alt="Random GIF" width="450px"/>
      <button onClick={clickHandler} className="bg-gray-200 w-9/12 font-bold px-8 py-3 text-lg rounded-md">Generate</button>
    </div>
  )  
}
