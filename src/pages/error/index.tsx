import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center ">
      <h1 className="font-bold text-6xl mb-2">404</h1>
      <h2 className="font-bold text-4xl mb-4">Página não encontrada</h2>
      <p className="italic text-xl mb-6">
        Você caiu em uma página que não existe!
      </p>

      <Link
        className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded hover:opacity-90 transition-opacity"
        to="/"
      >
        Voltar para produtos
      </Link>
    </div>
  );
}
