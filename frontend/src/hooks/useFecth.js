import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData(){

            const response = await fetch(url)

            const jsonResponse = await response.json()
            
            setData(jsonResponse)
        }

        fetchData()
    }, [url])

    return {data}
}