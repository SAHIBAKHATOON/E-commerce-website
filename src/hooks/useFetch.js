 import { useEffect, useState } from "react";
 

const useFetch  = (endpoint)=> {
const [data,setData] = useState();

useEffect(   () => {
    makeApiCall()
     
},[endpoint])

const makeApiCall = async () =>{
}

return { data }
}

export default useFetch;