import BackgroundComponent from "../ui/background";
import LoginForm from "../ui/login/login-form";

//Comentario
const Login = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="min-h-screen relative flex items-center justify-center p-4 md:p-20">
        <BackgroundComponent />
        <div className="relative z-10 w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
