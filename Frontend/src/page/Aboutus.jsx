import React, { useState, useEffect, useRef } from "react";

const Aboutus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    "images/equipo.jpg",
    "images/equipo2.jpg",
    "images/equipo3.jpg",
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
          En WorkWave, nos apasiona ayudar a los desarrolladores junior a
          encontrar empleos gratificantes y a impulsar sus carreras en el
          emocionante mundo del desarrollo de software.{" "}
        </p>
        <section className="about-info">
          <div>
            <div>
              <p>
                Nuestra misión es conectar a talentosos desarrolladores junior
                con empresas innovadoras que buscan nuevos miembros para sus
                equipos de desarrollo. Entendemos que comenzar en el campo del
                desarrollo puede ser desafiante, y estamos aquí para hacer que
                ese proceso sea más fácil y exitoso para ti.
              </p>
            </div>
            <div>
              <p>
                Nos especializamos en ofrecer oportunidades laborales adaptadas
                específicamente a desarrolladores junior. Ya sea que estés
                recién graduado, buscando tu primer empleo en el campo o en
                busca de una nueva oportunidad para expandir tus habilidades,
                tenemos algo para ti.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team">
            <h2>Nuestro Equipo</h2>
            <p>
              En WorkWave, contamos con un equipo dedicado y apasionado que
              trabaja incansablemente para ayudarte a encontrar las mejores
              oportunidades laborales y apoyarte en tu camino hacia el éxito en
              el desarrollo de software. Con una combinación única de
              experiencia en reclutamiento, desarrollo de software y apoyo
              profesional, nuestro equipo está aquí para brindarte el mejor
              servicio posible.
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
