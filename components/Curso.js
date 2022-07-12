import Styles from '../styles/Curso.module.css'
const Curso = ({curso}) => {
    const {titulo, contenido, imagen } = curso
  return (
    <section>
       <div className={`contenedor ${ Styles.grid}`}>
            <div className={Styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={Styles.texto}>{contenido}</p>

                <a className={Styles.enlace} href="#">Mas Informacion</a>
            </div>
       </div>
       <style jsx>
            {
                `
                section{
                    padding: 10rem 0;
                    margin-top:  10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb(0 0 0 /.7)),  url(${imagen.url});
                    background-size:cover;
                    background-position: 50%;
                }
                
                `
            }
       </style>
    </section>
  )
}

export default Curso