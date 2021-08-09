import { useState,useEffect } from "react";
import API from '../../API'

export const useMovieFetch =movieId =>{

    const[state,setState] = useState({});
    const[loading,setLoading] = useState(true)
    const[error , setError]= useState(false)

    useEffect(()=>{
// fetch movie function
 const fetchData =async()=>{

try{
  setLoading(true)
  setError(false)
  const movie = await API.fetchMovie(movieId);
  const credits= await API.fetchCredits(movieId);
  
  //   get directors only   
   const directors = credits.crew.filter(
       member => member.job === 'Director'
   );

   setState({
       ...movie,
       actors: credits.cast,
       directors
   })
    }
    catch(error){
        setError(true)
    }

}
    },[movieId]);

    return {state,loading,error}

}