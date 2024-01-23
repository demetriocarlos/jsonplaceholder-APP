
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Titulo } from "../Descripcion/Titulo"

import { Expand } from "../ExpandImg/Img"

import styles from './Publicacion.module.css'
export const PublicacionGrid = () => {
const API_URL='https://jsonplaceholder.typicode.com/'

const [data,setData]=useState([])
const [post,setPost]=useState(5)
const[album,setAlbum]=useState(5)
 
const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchData = async () =>{
    try{
      const response = await axios.get(`${API_URL}photos?albumId=${album}&_limit=${post}`)
        setData(response.data)
    }catch (err){
      console.log(err)
    }
  }  

    
//funcion que se le pasa al onClick para mostrar el componente 'Expand'
  const showImageModal = (image) => {
    //varia que contiene los datos de  onClick
    setSelectedImage(image);
    setModalVisible(true);
  }

  //funcion se utiliza para no mostrar el componente 'Expand'
  const hideImageModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  }


useEffect(() =>{
  fetchData()
   
},[])

 

console.log(data )
  return (
    <div> 
          <h1 className={styles.titulo}>Publicaciones</h1>
      
      <div className={styles.grid}>
        {
          data.map((publicacion,index) => ( 
            <div  className={`${styles.card} ${index === selectedImage ? styles.selected : ''}`}   
            key={publicacion.id}
            >
      {/*componente que se muestra cuando se aga click en una imagen */}
    <Expand 
      modalVisible={modalVisible} 
      hideImageModal={hideImageModal} 
      selectedImage={selectedImage}
      showImageModal={showImageModal}
      publicacion={publicacion}
      />

          

           <a href="#img"> 
            <img
              className={`${styles.img} ${index === selectedImage ? styles.zoomed : ''}`}
              width='250px'
              src={publicacion.url}
              alt=""
              onClick={() => showImageModal(publicacion)}
            />
            </a>

             <Titulo className={styles.descripcionTitulo} publicacion={publicacion}/>
            </div>
          ))
          }
      </div> 
    </div>
  )
}
