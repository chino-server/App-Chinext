import MainContent from "@/app/ui/login/mainContent";


const page = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen relative
    sm:bg-left md:bg-left lg:bg-center xl:bg-center"
      style={{ backgroundImage: `url('/backgroud.png')` }}
    >
      <div className="flex flex-col items-start h-full">
        <div className=" ml-15 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <MainContent
            title="CHI-NEXT"
            paragraph1= "loremsufasdlfkjasdlkf dsfasdklfjaslkdñfj asdf askldfja sdfla sdflkasdjf asdf asdlkfajsdfklasdjf faklsdjfalkñsdjf asñldkfjasdlfkjasd fñlaksdjf alsñdkfja sdlñkfasdf adsflkajsdf aslkdfjasdf fjaslkdfjasdlñkfja sdlfkajds lfkja sdflkajds"
            paragraph2="Aquí va el segundo párrafo con más informacióngasdfasdffasdfasdfasdasdf asdfasd."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
