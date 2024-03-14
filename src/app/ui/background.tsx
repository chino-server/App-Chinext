import React from 'react'
import Image from "next/image";
import background from "/public/background.png";

const BackgroundComponent = () => {
  return (
    <div className="absolute inset-0 z-0">
          <Image
            src={background}
            alt="Fondo"
            fill // Nueva prop para indicar que la imagen debe llenar el contenedor
            style={{ objectFit: "cover" }} // Estilos aplicados directamente al elemento <img>
            priority // Esto asegura que la imagen se carga con alta prioridad
          />
        </div>
  )
}

export default BackgroundComponent