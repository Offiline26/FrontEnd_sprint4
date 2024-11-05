import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import mecanico1 from '@/public/img_mecanico.jpeg'
import mecanico2 from '@/public/img_mecanico22.jpeg'
import PostmanButton from "@/components/Postman";

export default function Servico() {
    return (
        <main>
            <section className="flex flex-col">
                <header className="flex justify-center font-bold items-center bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-sans text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl shadow-[0.5vh_0.5vh_rgba(58,58,58)] h-24 md:h-32">
                    <h1>SERVIÇOS</h1>
                </header>

                <div className="grid grid-cols-5 gap-0 bg-[#ffffff] text-center text-white text-xs sm:text-sm lg:text-base h-16 md:h-24">
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="w-full bg-[#3C8B96] mb-20 font-bold">
                        <Link href="/servicos"><em>Serviços</em></Link>
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
            <section className="box_servico11">
                <section className="box_servico12">
                    <header id="corpo11_servico">
                        Precisando de um guincho?
                    </header>
                    <article id="texto11_servico">
                        Temos contatos de guinchos 24 horas, de pronta-disponibilidade, independente de eu local ou período do
                        imprevisto.
                    </article>
                </section>
                <div id="corpo12_servico"><Image src={mecanico1} alt='mecanico' id="img11_servico" />
                </div>

            </section>
            <section className="box_servico21">
                <div id="corpo22_servico"><Image
                    src={mecanico2}
                    alt="mecanico2"
                    id="img21_servico" />
                </div>
                <section className="box_servico22">
                    <header id="corpo21_servico">
                        Um mecânico?
                    </header>
                    <div id="texto21_servico">Temos contatos de mecânicos de confiança que serão acionados de acordo com a
                        região, sendo eles os mais próximos e disponíveis para lidar com sua ocorrência.
                    </div>
                </section>
            </section>
            <header id="texto3_servico">A Auto Aid está sempre disponíveis para qualquer situação!</header>
            <section id="corpo31_servico">
                <section className="box_servico31">
                    <article className="artigo31">
                        <div id="corpo32_servico">
                            <p className="pneu">PNEU</p>
                        </div>
                        <div id="texto31_servico">
                            Pneu furou? <br /><br /> Precisa de estepe? <br /><br />Alguém para trocar o pneu?<br />
                        </div>
                    </article>
                    <article className="artigo32">
                        <div id="corpo33_servico">
                            <p className="eletrica">ELETRICA</p>
                        </div>
                        <div id="texto32_servico">
                            A bateria arriou? <br /><br /> Algué para trocar a bateria? <br /><br /> Precia de uma bateria nova?
                        </div>
                    </article>
                    <article className="artigo33">
                        <div id="corpo34_servico">
                            <p className="motor">MOTOR</p>
                        </div>
                        <div id="texto33_servico">
                            Motor está fazendo barulhos estranhos? <br /><br /> O motor parece não funcionar bem?
                        </div>
                    </article>
                    <article className="artigo34">
                        <div id="corpo35_servico">
                            <p className="crescer">AMORTECEDOR</p>
                        </div>
                        <div id="texto34_servico">
                            Está sentindo instabilidade <br /><br /> Precisa fazer alinhamento? <br /><br /> Travamento nos
                            amortecedores?
                        </div>
                    </article>
                </section>
                <section className="box_servico32">
                    <article className="artigo35">
                        <div id="texto4_servico">
                            ESTÁ COM ALGUM DESSES PROBLEMAS OU NÃO TEM CERTEZA DO QUE É?
                        </div>
                        <div id="corpo4_servico">
                            <Link href='/chatbot'>
                                <p className="bot">FALE COM NOSSO BOT</p>
                            </Link>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );

}