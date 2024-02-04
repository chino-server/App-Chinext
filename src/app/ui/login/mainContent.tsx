
import React from 'react';
import Link from 'next/link';

interface MainContentProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

const MainContent: React.FC<MainContentProps> = ({ title, paragraph1, paragraph2 }) => {
  return (
    <div className="flex justify-end items-center min-h-screen ">
      <div className=" p-10 space-y-6 max-w-lg">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-orange-500 to-yellow-200 bg-clip-text text-transparent ">{title}</h1>
        <p className="text-white">{paragraph1}</p>
        <p className="text-white">{paragraph2}</p>
        <div className="space-x-4">
          <Link href={'/login'}>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Botón 1</button>
          </Link>
          <button className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Botón 2</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
