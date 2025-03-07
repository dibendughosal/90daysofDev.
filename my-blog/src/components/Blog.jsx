import { useContext } from "react"
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext"
function Blog(){
    const {posts,loading} = useContext(AppContext);
    return (
        <div className="w-2/3 mx-auto flex flex-col justify-center items-center gap-y-7 my-[100px]">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? <div className="text-center text-gray-500 text-lg"> No Post Found </div> : 
                    (posts.map((post) => ( 
                        <div key={post.id}>
                            <p className="text-red-500 text-lg font-bold">{post.title}</p>
                            <p className="text-[12px]">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span> 
                            </p>
                            <p className="text-[12px] mt-1">
                                Posted On <span>{post.date}</span>
                            </p>
                            <p className="text-md mt-[14px]">{post.content}</p>
                            <div className="flex gap-x-3">
                                {
                                    post.tags.map((tag,index) => (
                                        <span key={index} className="text-blue-500 underline font-bold text-[14px]">#{tag} </span>
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