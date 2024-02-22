import React, { useState, useEffect, useRef } from "react";

const Aboutus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    "images/aloe.jpg",
    "images/anemona.jpg",
    "images/cactus.png",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;

    const showImage = (index) => {
      images.forEach((image, i) => {
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
    <section className="about-us">
      <h1 className="about-us-tittle">Sobre nosotros</h1>
      <hr />
      <section className="about-content">
        <p className="welcome">
          ¡Bienvenidos a nuestro increíble mundo verde, donde las plantas son las estrellas y la diversión nunca se marchita!
        </p>
        <section className="about-info">
          <div >
             <div>
          <p>En nuestro fascinante rincón cibernético, somos más que una simple tienda de plantas;
          </p>
          <p>
            Somos la última parada para amantes de las plantas, expertos en jardinería y aquellos que aún están intentando averiguar si regar las suculentas una vez al mes es suficiente.
          </p>
        </div>
       
          <div >
            <p>
              En Matoplantas, no solo te ofrecemos plantas, ¡te ofrecemos una experiencia botánica que nunca olvidarás!</p>
            <p>
              ¿Te preguntas por qué nuestras plantas siempre lucen tan felices?</p>
            <p>
              La respuesta es simple: ¡les damos amor, atención y, ocasionalmente, música de fondo para alegrar sus días (y noches)!
            </p>
          </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team">
            <h2>Nuestro Equipo</h2>
          <p>
            Nuestro equipo está formado por jardineros locos, expertos en clorofila y amantes de la hoja verde que están siempre dispuestos a compartir consejos, trucos y chistes verdes. Así que, si alguna vez te preguntas por qué tu cactus te mira de esa manera extraña, ¡no dudes en consultarnos! Estamos aquí para desmitificar el misterioso mundo de las plantas y convertirlo en una fiesta inolvidable.
          </p>
          <p>
            Así que, ya sea que estés buscando tu primera planta o simplemente quieras agregar una más a tu jungla personal, Matoplantas es el lugar donde las risas son tan abundantes como las hojas. ¡Únete a la diversión y haz que tu espacio vital sea más verde y alegre con nosotros!
          </p>   
          </div>
          <div className="carousel" ref={carouselRef}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
        </section>
      </section>
    </section>

  );
};

export default Aboutus;

