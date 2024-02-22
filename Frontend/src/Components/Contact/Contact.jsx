import React, { useState } from "react";
import "./contact.css";

const Contact = () =>
{
    const [ mostrarNotificacion, setMostrarNotificacion ] = useState( false );
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        setMostrarNotificacion( true );
    };
    return (
        <div className="formContainerContacto">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Formulario de Contacto</h1>
                <p><b>Rellene los siguientes campos: </b></p>
                <div className="form--inputs--divs">
                    <input type="text" placeholder='Nombre completo*' />
                </div>
                <div className="form--inputs--divs">
                    <input type="text" placeholder='Correo electrónico*' />
                </div>
                <div className="form--inputs--divs">
                    <input type="text" placeholder='Número de contacto*' />
                </div>
                <div className={`ocultarNotificacion ${mostrarNotificacion ? "mostrarNotificacion" : ""}`}>
                    <article>¡Gracias!¡Nos pondremos en contacto lo antes posible!</article>
                </div>
                <button className="buttonEnviar" type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default Contact