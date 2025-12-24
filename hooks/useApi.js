import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (url) => {
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(false)
    const [data , setData] = useState({})
    const controller = new AbortController();
const request = async () => {

    try {

        const response = await  axios.get(url)
        setData(response.data)


    } catch (error) {
        setError(error.message)
    } finally {
        setLoading(false)
    }
}
  useEffect(() => {
    request()
    
    //prevent memory leak
    return controller.abort()

  }, [url])
  return { data, loading, request , error };
}

export default useApi;