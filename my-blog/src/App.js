import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
export default function App(page) {

  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  },[page]);

  return <div className='overflow-x-hidden font-["Inter","Serif"]'>
    <Header/>
    <Blog/>
    <Pagination/>
  </div>;
}
