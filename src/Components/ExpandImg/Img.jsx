
import { Link } from 'react-router-dom'
import styles from './Img.module.css'
 
 
export const Expand = ({modalVisible,hideImageModal,selectedImage}) => {
     
  const handleContentClick = (e) => {
    // Detener la propagación del evento de clic para evitar la navegación
    e.stopPropagation();
    e.preventDefault();
  };
     
  return (
    <> {/*si modalVisible es true se muestra si es false no */}
        {modalVisible && (
      <div className={styles.div}> 
        <div   className={styles.modalOverlay} onClick={hideImageModal}  /*onClick={hideImageModal}*/>
          <div   className={styles.modalContent} /*onClick={handleContentClick}*/   >


         
          <Link to={ `/image/${ selectedImage.id}`}>
            <img
              className={styles.modalImage}
              // 'selectedImage' contiene los datos de la Api
              src={selectedImage.url  }
              alt="Selected Image"
        />
              </Link>
               {/** 'hideImageModal' para que no sea visible el componente */}
            <button className={styles.boton} onClick={hideImageModal}>X</button>
             
          </div>
          
        </div>
      </div>
      )}
    </>
  )
}
