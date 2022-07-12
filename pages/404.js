import Link from "next/link"
import Styles from '../styles/NoEncontrado.module.css'
const NoEncontrado = () => {
  return (
  
        <div className={Styles.no_encontrado}>
            <h1 className="heading"> Página no encontrada</h1>
            <Link href="/">Volver al Inicio</Link>
        </div>
      
  
  )
}

export default NoEncontrado