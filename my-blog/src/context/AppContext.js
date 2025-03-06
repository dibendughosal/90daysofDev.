import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const values = {
        loading,
        setLoading, 
        posts, 
        setPosts, 
        page, 
        setPage, 
        totalPages, 
        setTotalPages,
        fetchBlogPosts,
        pageChangeHandler,
    }
    async function fetchBlogPosts(page=1){
        const url = `${baseUrl}?pages=${page}`
        setLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);

        }
        catch(error){
            console.error("Error fetching blog posts:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        finally{
            setLoading(false);
        }
    }

    function pageChangeHandler(page){
        console.log("Page Change triggered: " + page);
        setPage(page);
        fetchBlogPosts(page);
    }


    return (
        <AppContext.Provider value={values}>
            {children}  
        </AppContext.Provider>
    )
}