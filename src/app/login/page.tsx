const Login = () => {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center relative flex items-center justify-start p-20" style={{ backgroundImage: `url('/backgroud.png')` }}>
      <div className="w-full max-w-lg">
        <div className="leading-loose">
          <form className="max-w-sm m-4 p-10 bg-white bg-opacity-10 rounded-xl shadow-xl">
            <p className="text-orange-500 font-medium text-center text-lg font-bold">LOGIN</p>
            <div className="">
              <label className="block text-sm text-white" htmlFor="email">E-mail</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email" placeholder="Digite o e-mail" aria-label="email" required />
            </div>
            <div className="mt-2">
              <label className="block text-sm text-white">Password</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="password" id="password" placeholder="Digite a sua senha" aria-label="password" required />
            </div>

            <div className="mt-4 items-center flex justify-center">
              <button className="px-10 py-1 text-white font-light tracking-wider bg-cyan-600 hover:bg-gray-800 rounded" type="submit">Entrar</button>
              
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


