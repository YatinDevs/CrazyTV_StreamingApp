import { useState ,useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
import {Header,Footer,Home,Details,SearchResult,Explore,PageNotFound} from './index.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
     
  const dispatch = useDispatch()
  const {url} = useSelector((state)=>state.home);
  console.log(url);
   
     useEffect(()=>{
      fetchApiConfig();
      genresCall();
     },[]);


    const fetchApiConfig = () => {
      fetchDataFromApi("/configuration")
      .then((response)=>{
        //  console.log(response);
         const url = {
          backdrop: response.images.secure_base_url + "original",
          poster: response.images.secure_base_url + "original",
          profile: response.images.secure_base_url + "original",
        }
    
         dispatch(getApiConfiguration(url));
      })
    }
   
   const genresCall = async() =>{
      let promises = []
      let endPoints = ["tv","movie"]
      let allGenres = {}

      endPoints.forEach((endpoint)=>{
          // console.log(endpoint);
        promises.push(fetchDataFromApi(`/genre/${endpoint}/list`))
      })
      // console.log(promises);

      const data = await Promise.all(promises);
      // console.log(data);
      data.map(({genres})=>{
        // console.log(genres);
          return genres.map((item)=>(allGenres[item.id] = item));
      })

      // console.log(allGenres);

      dispatch(getGenres(allGenres));
   }
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
