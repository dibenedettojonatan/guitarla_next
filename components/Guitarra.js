
import Image from "next/image"
import Link from "next/link"
import Styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
    const {descripcion, imagen, nombre, precio, url }= guitarra
  return (
    <div className={Styles.guitarra}>

        <Image layout="responsive" width={180} height={350} src={imagen.url}  alt={`Imagen Guitarra ${nombre}`}/>
        <div className={Styles.contenido}>
            <h3>{nombre}</h3>
            <p className={Styles.descripcion}>{descripcion}</p>
            <p className={Styles.precio}>€{precio}</p>
            <Link href={`/guitarras/${url}`}>
                <a className={Styles.enlace}>
                   Ver Producto
                </a>
               
            </Link>
        </div>
    </div>
  )
}

export default Guitarra