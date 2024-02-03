import MainContent from "../ui/login/mainContent";

const page = () => {
  return (
    <div
      className={`bg-cover bg-no-repeat bg-center min-h-screen relative
    sm:bg-left md:bg-left lg:bg-center xl:bg-center`}
      style={{ backgroundImage: `url('/backgroud.png')` }}
    >
      <div className="flex justify-start items-center h-full">
        <div className="ml-20 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <MainContent
            title="CHI-NEXT"
            paragraph1="Aquí va el primer párrafo acerca de CHI-NEXTfasdfasdf afsasdfasdfasd asdfasdfasdfa sdfas dfadsfadsf asdfa fasdasdfa sdfa sdfasdfa sdf."
            paragraph2="Aquí va el segundo párrafo con más informacióngasdfasdfasdf asdfasd."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
