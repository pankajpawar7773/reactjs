import React,{useEffect, useState} from 'react'

function FetchData() {
    const [data,setData] = useState([]);
    const [error,setError] = useState(false);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        try{
            const response = await fetch("https://dummyjson.com/products/");
            const result = await response.json();
            setData(result.products)
        }
        catch(error){
            setError("Error while fetching data");
        }
    }

  return (
    <>
    <h4>Items</h4>
    {error && <p>{error}</p>}
    {data ? 
    (
    data.map((dataa)=>(
        <p key={dataa.id}>{dataa.title}</p>
    ))
    ): (<p>Loading..</p>)}
    </>

  )
}

export default FetchData