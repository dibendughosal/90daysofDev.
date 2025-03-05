import Random from './components/Random';
import Tag from './components/Tag';
export default function App() {
  return (
    <div className="w-full h-screen items-center flex flex-col background">
      <h1 className='w-11/12 text-center text-4xl font-bold bg-white rounded-md mt-[25px] px-10 py-2 '>
      RANDOM GIF
      </h1>
      <div className='w-full flex flex-col items-center gap-y-4 mt-[30px]'>
        <Random />
        <Tag />
      </div>
      <div>

      </div>
    </div>
  )
}
