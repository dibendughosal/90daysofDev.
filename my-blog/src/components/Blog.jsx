import { useContext } from "react"
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext"
function Blog(){
    const {posts,loading} = useContext(AppContext);
    return (
        <div>
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? <div className="text-center text-gray-500 text-lg"> No Post Found </div> : 
                    (posts.map((post) => ( 
                           <div key={post.id}>
                            <p className="text-red-500 font-bold">{post.title}</p>
                            <p>
                                By <span>{post.author}</span> on <span>{post.category}</span> 
                            </p>
                            <p>
                                Posted On <span>{post.date}</span>
                            </p>
                            <p>{post.content}</p>
                            <div>
                                {
                                    post.tags.map((tag,index) => (
                                        <span key={index}>#{tag} </span>
                                    ))
                                }
                            </div>
                        </div>
                    )
                    )) 
                ) 
            }
        </div>
    )
}
export default Blog