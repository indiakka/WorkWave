import React, {useState, useRef, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Principal() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    "images/cuadrados.gif",
    "images/cuadrados2.gif",
    "images/cuadrados3.gif",
  ];

const prueba = "../../images/prueba.jpg"

  useEffect(() => {
    const carousel = carouselRef.current;

    const showImage = (index) => {
      images.forEach((images, i) => {
        const imgElement = carousel.children[i];
        if (i === index) {
          imgElement.classList.add("active");
        } else {
          imgElement.classList.remove("active");
        }
      });
    };

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      showImage(currentIndex);
    };

    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);



  return (
    <div>
      <section className="hero">
        <img src="../../images/logo-white.png" alt="geranio rojo" />
        <div className="heroGeranium">
          <a className="gigante">JU<br />NIOR <br />PLACE</a>
          <p className="descripcionGeranio__hero">Un portal donde tus experiencias con el mundo tecnológico no importan. Crea la tuya propia a partir de aquí. Aquí empieza todo</p>
        </div>
      </section>
    <div>
        <div className="barBlue"></div>
        {/* zona secundaria sección fotos */}
        <section className="infoGeranio">
          <article className="descripcionGeranio">
            <p className="descripcion__p1">
            Miles de juniors del software comparten, comparan, hacen crecer y empezar sus carreras con WorkWave. Una plataforma abierta construida por desarrolladores para desarrolladores.
            </p>
            <NavLink to="/Products">
            <div className="carousel-principal" ref={carouselRef}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div></NavLink>
          </article>
        </section>
      </div>
      <div>
        <div className="barrVerde"></div>
        <section className="descuento">
          <div className="porcentaje"><a> </a></div>
          <p className="textoPromo__porcentaje">Contactanos para una mejor<a className="experiencia"> <br />EXPERIENCIA</a></p>
          <button className='button' onClick={() => navigate('/Contact')}>CONTACTANOS</button>
        </section>
        <NavLink to="/Products" style={{ textDecoration: 'none' }}>
        <div className="botones__cruzada--mobile">
        
        {/* <button className="button" > <img src="./images/abono.svg" alt="icono abono" /></button>
        <button className="button" >SUSTRATO<img src="./images/sustrato.svg" alt="icono abono" /></button>
        <button className="button" >RIEGO<img src="./images/riego.svg" alt="icono abono" /></button> */}
       
        </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Principal;