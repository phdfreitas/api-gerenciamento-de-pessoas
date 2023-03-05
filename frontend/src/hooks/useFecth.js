import { useEffect, useState } from "react";
import authHeader from "../service/AuthenticationHeader";

export const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData(){

            const response = await fetch(url, {
                method: 'GET',
                headers: authHeader()
            })

            const jsonResponse = await response.json()
            
            setData(jsonResponse)
        }

        fetchData()
    }, [url])

    return {data}
}