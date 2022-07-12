import Image from "next/image"
import Layout from "../components/Layout"
import Styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (

    <Layout
        pagina='Nosotros'
    >   
        <main className="contenedor">
            <h2 className="heading">Nosotros </h2>
            <div className={Styles.contenido}>
                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>
                <div>
                    <p>Vestibulum nec scelerisque tellus. Morbi lectus dolor, vulputate id quam at, bibendum luctus tellus. Phasellus cursus velit sit amet nunc pretium placerat. Suspendisse lobortis fringilla consequat. Nullam sed massa maximus, cursus metus at, scelerisque augue. Etiam convallis mi a nisi aliquet convallis. Quisque non bibendum quam. Integer eget nisl sit amet ante tempus iaculis. Pellentesque tempor, mauris eget rhoncus ornare, enim metus viverra augue, quis maximus urna odio id lectus. Proin nec augue diam. Vestibulum sollicitudin eros in finibus scelerisque. Cras maximus commodo luctus.
                    </p>
                    <p>Vestibulum nec scelerisque tellus. Morbi lectus dolor, vulputate id quam at, bibendum luctus tellus. Phasellus cursus velit sit amet nunc pretium placerat. Suspendisse lobortis fringilla consequat. Nullam sed massa maximus, cursus metus at, scelerisque augue. Etiam convallis mi a nisi aliquet convallis. Quisque non bibendum quam. Integer eget nisl sit amet ante tempus iaculis. Pellentesque tempor, mauris eget rhoncus ornare, enim metus viverra augue, quis maximus urna odio id lectus. Proin nec augue diam. Vestibulum sollicitudin eros in finibus scelerisque. Cras maximus commodo luctus.
                    </p>
                </div>
            </div>
        </main>
    </Layout>  
   
  )
}

export default Nosotros