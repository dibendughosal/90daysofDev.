
import { useContext } from 'react';
import { AppContext} from '../context/AppContext';
function Pagination(){

    const {page,totalPages, pageChangeHandler} = useContext(AppContext);
    return (
        <div className='w-full flex flex-col items-center fixed bottom-0 border bg-white'>
            <div className='w-2/3 mx-auto flex justify-between py-2 max-w-[770px]'>
                <div className='flex gap-2 items-center'>
                    {
                        page > 1 && 
                        (<button className='rounded-md px-4 py-1 border' onClick={() => pageChangeHandler(page-1)}>Previous</button>)
                    }
                    {
                        page < totalPages && 
                        (<button className='rounded-md px-4 py-1 border' onClick={() => pageChangeHandler(page+1)}>Next</button>)
                    }
                </div>
                <div className='font-bold'>
                    Page {page} of {totalPages}
                </div>
            </div>
        </div>
    )
}
export default Pagination