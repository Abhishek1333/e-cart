//custom hooks -function

import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data,setData]=useState(null)
    // calls the fetch when the page loads
    useEffect(()=>{
        fetch(url).then(res=>{
            //.json() to remove unnecessary data
            res.json().then(result=>{
                setData(result)
            })
        },[])
    })
    return data
}
export default useFetch;