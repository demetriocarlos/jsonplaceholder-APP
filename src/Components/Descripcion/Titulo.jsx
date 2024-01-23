
import styles from './Titulo.module.css'
import { useState } from 'react';
import axios from 'axios';

import { MdTitle } from "react-icons/md";
import { VscComment } from "react-icons/vsc";

export const Titulo = ({ publicacion}) => {
  const API_URL='https://jsonplaceholder.typicode.com/'

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostTitle, setSelectedPostTitle] = useState('');
  const [showTitle, setShowTitle] = useState(false);

  const obtenerTitulo = async (postId) => {
    try {
      const response = await axios.get(`${API_URL}photos/${postId}`);

      setSelectedPostTitle(response.data.title);
    } catch (err) {
      console.log(err);
    }
  }
//funcion que se dispara cuando se utiliza el onClick
  const mostrarTitulo = (postId) => {
    if (showTitle && selectedPost === postId) {
      setSelectedPost(null);
      setShowTitle(false);
    } else {
      //variable que sele asignan los datos cuando se utiliza el onclick
      setSelectedPost(postId);
      //funcion que obtiene los datos cuando  se utiliza el onClick
      obtenerTitulo(postId);
      setShowTitle(true);
    }
  }

  return (
    <div className={styles.container}> 
            <button className={styles.boton} onClick={() => mostrarTitulo(publicacion.id)}> 
              {showTitle && selectedPost === publicacion.id ? "" : <VscComment className={styles.comment}/>}
              </button>
               
            {selectedPost === publicacion.id && showTitle &&(
              <div className={styles.parrafo}> 
                  <button className={styles.boton2} onClick={() => mostrarTitulo(publicacion.id)}> 
                  {/*  si  showTitle es falso y selectedPost es null returna 'X' encaso contrario '<VscComment/>'*/}
                    {showTitle && selectedPost === publicacion.id ? "X" : "Mostrar Título"}
                  </button>
                  {/* variable que muestra los datos */}
                  <p>Título: { selectedPostTitle}</p>
              </div>
            )}
    </div>
  )
}
