import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import call from '@/public/img_call.jpeg'
import PostmanButton from "@/components/Postman";


export default function Suporte() {
    return (
        <main>
            <section className="flex flex-col">
                <header className="flex justify-center font-bold items-center bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-sans text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl shadow-[0.5vh_0.5vh_rgba(58,58,58)] h-24 md:h-32">
                    <h1>SUPORTE</h1>
                </header>

                <div className="grid grid-cols-5 gap-0 bg-[#ffffff] text-center text-white text-xs sm:text-sm lg:text-base h-16 md:h-24">
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/servicos">Serviços</Link>
                    </div>
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/suporte"><em>Suporte</em></Link>
                    </div>
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/chatbot">ChatBot</Link>
                    </div>
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </section>
            <header className="title_suporte">

                <h2>Encontre respostas rápidas e suporte eficiente para todas as suas necessidades</h2>
            </header>
            <section className="box_suporte1">
                <article id="texto11_suporte">Se for sua primeira vez acessando nosso site, fique tranquilo, garantimos que seu
                    atendimento será feito de maneira rápida e prática
                </article>
                <article id="texto12_suporte">A Auto Aid utiliza de um ChatBot para te auxiliar em quais passos você deve tomar,
                    desde seu cadastro até a contatação de serviços
                </article>
            </section>
            <div id="corpo1_suporte"><Image
                src={call}
                alt="" id="img1_suporte" />
            </div>
            <section className="box_suporte2">
                <section className="box_suporte21">
                    <div id="texto21_suporte">Cadastre-se no Auto Aid agora para evitar perder tempo quando houver uma
                        necessidade! Sua segurança e conforto durante o atendimento com o Bot é a nossa prioridade.
                    </div>
                    <div id="corpo21_suporte">
                        <Link href='/login' className="id_foto">
                            LOGIN
                        </Link>
                    </div>
                </section>
                <section className="box_suporte22">
                    <div id="texto22_suporte">Caso precise utilizar nosso serviço, a Porto disponibilizou um ChatBot com uma IA
                        funcional que te auxilia para a tomada da melhor decisão para cada situação que precisar.
                    </div>

                    <div id="corpo22_suporte">
                        <Link href='/chatbot' className="id_foto">
                            FALE CONOSCO
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}