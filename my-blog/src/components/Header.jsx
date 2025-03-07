import blogLogo from './blogLogo.png'
function Header(){
    return (
        <div className="w-full flex justify-center shadow-lg fixed bg-white">
            <div className="w-2/3 mx-auto flex items-center justify-between py-4">
                <div className='flex justify-center items-center'>
                    <img className="h-10" alt='logo' src={blogLogo}/>
                    <h1 className="text-2xl font-bold font-['Roboto']">My Blogs</h1>
                </div>
                <p className="text-[gray]
                text-xl">Welcome to my blog app</p>
            </div>
        </div>
    )
}
export default Header