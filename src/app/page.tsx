import MainContent from "@/app/ui/home/mainContent";

const page = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen relative
    sm:bg-left md:bg-left lg:bg-center xl:bg-center"
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <div className="flex flex-col items-start h-full">
        <div className=" ml-10  md:w-1/2 lg:w-1/2 xl:w-1/2">
          <MainContent
            title="CHI-NEXT AUTOMATED FORENSIC REPORT"
            paragraph1="CHI-NEXT redefine la informática forense con su avanzado sistema automatizado, que se integra con SIPEC para convertir eficientemente los datos en informes precisos con la ayuda de Inteligencia Artificial."
            paragraph2="Este enfoque automatizado acelera la generación de informes, mejora la precisión y soporta la toma de decisiones críticas. xinforme = 3 simples pasos"
          />
        </div>
      </div>
      
    </div>
  );
};

export default page;
