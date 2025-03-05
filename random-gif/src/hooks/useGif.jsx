import axios from "axios";
import { useEffect, useState } from "react";

let API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
let url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {  
        const [src, setSrc] = useState('');
        const [loading, setLoading] = useState('false');
    
        async function fetchData(){
            setLoading(true);
            const {data} = await axios.get(tag ? (`${url}&tag=${tag}`) : url);
            let response = data.data.images.fixed_width.url;
            console.log(response)
            setSrc(response);
            setLoading(false);
        }
 
      useEffect(() => {
        fetchData();
      }, []);

    return [fetchData, loading, src]
}
    

export default useGif
