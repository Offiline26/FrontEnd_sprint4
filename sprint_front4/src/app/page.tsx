"use client"

import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import call from '@/public/celular.avif'
import motorista from '@/public/img_motoristo.jpg'
import amigo from '@/public/img_reuniao.jpeg'
//import PostmanButton from "@/components/Postman";

export default function Home() {

  return (
    <main>
      <section className="flex flex-col">
        <header className="flex justify-center font-bold items-center bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-sans text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl shadow-[0.5vh_0.5vh_rgba(58,58,58)] h-24 md:h-32">
          <h1>AUTO AID</h1>
        </header>

        <div className="grid grid-cols-5 gap-0 bg-[#ffffff] text-center text-white text-xs sm:text-sm lg:text-base h-16 md:h-24">
          <div className="w-full bg-[#3C8B96] mb-20 font-bold">
            <Link href="/">
              <em>Home</em>
            </Link>
          </div>
          <div className="w-full bg-[#3C8B96] mb-20 font-bold">
            <Link href="/servicos">Serviços</Link>
          </div>
          <div className="w-full bg-[#3C8B96] mb-20 font-bold">
            <Link href="/suporte">Suporte</Link>
          </div>
          <div className="w-full bg-[#3C8B96] mb-20 font-bold">
            <Link href="/chatbot">ChatBot</Link>
          </div>
          <div className="w-full bg-[#3C8B96] mb-20 font-bold">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </section>

      <section className="box_home1">
        <header className="titulo1_home">
          <h2>Auto Aid preparada para quaquer situação!</h2>
        </header>
        <div id="corpo11_home">
          <Image src={call} alt="cara_no_telefone" className="imgjoia" />
          <article id="corpo12_home">
            <p className="id_home">1 Seu carro deu problema? Você está no lugar certo!</p>
            <p className="id_home">2 Serviço online 24h. Não vamos te deixar na mão!</p>
            <p className="id_home">3 Tem Duvidas? Converse agora com o nosso Bot!</p>
          </article>
        </div>
      </section>
      <section className="box_home2">
        <header id="titulo2_home">O seguro feito para todos</header>

        <article id="corpo21_home">
          <Image
            src={motorista}
            alt="motorista" className="img_motoristo" />
          <p className="class_home">
            Soluções que vieram para inovar a sua maneira de pensar. A “Auto
            AID”, une a “IA” com a sua necessidade real. Não importa onde você
            esteja ou o nível do problema ocorido, somos preparados para te dar o
            suporte da maneira mais rápida e eficaz possível!
          </p>
          <Image
            src={amigo}
            alt="reunião" className="img_reuniao" />
        </article>
        <footer id="corpo22_home">
          <p>
            <strong>Desde um problema grave, com necessidade de guincho ou mecânico,
              até um pequeno detalhe. Damos um diagnóstico já com orçamento e
              prestadores de serviço de confiança.</strong>
          </p>
        </footer>
      </section>
      <section className="box_home3">
        <article id="corpo31_home">
          <p className="textinho">
            Nosso serviço é planejado por uma ‘IA’que conversa com os clintes,
            programada para responder conforme suas necessidades
          </p>
        </article>
        <article id="corpo32_home">
          <p className="textinho">
            Ser um cliente Porto deixa seu dia a dia com o veículo mais leve, sem
            se preocupar com problemas e sabendo que terá um suporte imediato
          </p>
        </article>
        <article id="corpo33_home">
          <p className="textinho">
            A Porto se compromete 100% com o cliente, pois tratamos de algo sério
            e queremos inovar o mercado com essa conexão da IA com o cliente
          </p>
        </article>
        <article id="corpo34_home">
          <p className="textinho">
            Em nosso site há um chat direto com o cliente, onde pode ser tirado
            dúvidas à respeito de nosso serviço de nosso serviço e uso do site
          </p>
        </article>
        <article id="corpo35_home">
          <p className="textinho">
            Estamos disponíveis 24h. Com a Porto você não vai ficar na mão,
            independente do horário, dia ou local
          </p>

        </article>
      </section>
    </main>
  );
}
