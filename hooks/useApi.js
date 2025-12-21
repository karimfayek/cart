import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (url) => {
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(false)
    const [data , setData] = useState({})
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
  }, [url])
  return { data, loading, request , error };
}

export default useApi;