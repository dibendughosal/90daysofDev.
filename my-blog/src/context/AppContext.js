import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPosts(page = 1) {
        console.log("Fetching posts for page:", page);
        setLoading(true);

        try {
            const response = await fetch(`${baseUrl}?pages=${page}`);
            const data = await response.json();

            console.log("Fetched Data:", data);

            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } 
        catch (error) {
            console.error("Error fetching blog posts:", error);
            setPosts([]);
            setTotalPages(null);
        } 
        finally {
            setLoading(false);
        }
    }

    function pageChangeHandler(newPage) {
        console.log("Page Change Triggered:", newPage);  
        setPage(newPage);
    }

    useEffect(() => {
        fetchBlogPosts(page);
    }, [page]);

    return (
        <AppContext.Provider value={{ loading, posts, page, totalPages, pageChangeHandler,fetchBlogPosts }}>
            {children}
        </AppContext.Provider>
    );
}
