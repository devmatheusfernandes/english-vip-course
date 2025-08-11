import Image from "next/image";
import ImagemEstudante from "@/public/Image.png";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-[#c7dbff] rounded-2xl px-6 md:px-12 py-8 md:py-16">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12">
        {/* Logo como texto */}
        <span className="text-2xl font-bold text-[#1a2b4b]">
          english<span className="text-blue-500">VIP</span>
          <span className="text-sm font-normal ml-1">course</span>
        </span>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-[#1a2b4b] font-medium">
          <li>Sobre Nós</li>
          <li>Equipe</li>
          <li>Alunos</li>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>

        {/* Botão */}
        <button className="bg-blue-400 text-white font-medium px-5 py-2 rounded-full hover:bg-blue-500 transition">
          Quero aprender!
        </button>
      </nav>

      {/* Conteúdo principal */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a2b4b] leading-snug">
            Aprenda Inglês de verdade com{" "}
            <span className="text-blue-700">aulas personalizadas</span> ao vivo!
          </h1>
          <p className="text-gray-600 mt-3">Aprenda no seu ritmo!</p>
          <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Começar agora!
          </button>
        </div>

        {/* Imagem simples */}
        <div className="flex justify-center">
          <Image
            src={ImagemEstudante}
            alt="Estudante"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
