
 import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './Detalles.module.css'

export const Detalles = () => {
    const API_URL='https://jsonplaceholder.typicode.com/'
    const [data,setData]=useState(null)
    const [num,setNum]= useState(1)
    const {id} = useParams()

    const fetchData = async () =>{
        try{
          const response = await axios.get(` https://jsonplaceholder.typicode.com/photos/${id}?albumId=${num}&_limit=${num} `)
            setData(response.data)
        }catch (err){
          console.log(err)
        }
      } 


      useEffect(() =>{
        fetchData()
         
      },[id])

      if (!data) {
        return null;
      }
  return (
    <div className={styles.container}>  
        <img className={styles.img} src={data.url} alt="" />
    </div>
  )
}
