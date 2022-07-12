import Link from "next/link"
import Image from 'next/image'
import {useRouter} from 'next/router'
import Styles from '../styles/Header.module.css'


const Header = ({guitarra}) => {
  const router = useRouter()
  return (
    <header className={Styles.header}>
        <div className="contenedor">
           <div className={Styles.barra}>
                
                <Link href="/">
                  <a>
                    <Image width={400}  height={100} src="/img/logo.svg" alt="Imagen Logo"/>
                  </a>
                </Link>
                
                <nav className={Styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/carrito">
                      <a> 
                        <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="Imagen carrito"/>
                      </a>
                    </Link>
                </nav>
           </div>
           {guitarra &&(
              <div className={Styles.modelo}>
                <h2>Modelo{guitarra.nombre}</h2>
                <p>{guitarra.descripcion}</p>
                <p className={Styles.precio}>€{guitarra.precio}</p>
                <Link href={`/guitarras/${guitarra.url}`}>
                    <a className={Styles.enlace}>
                      Ver Producto
                    </a>
                </Link>
              </div>
           )}
        </div>
            {router.pathname === '/' && (
              <div className={Styles.guitarra}>
                <Image
                    layout="fixed" 
                    width={500}
                    height={1200}
                    src="/img/header_guitarra.png" 
                    alt="Imagen de header guitarra"
                />
              </div>
            )}
    </header>
  )
}

export default Header