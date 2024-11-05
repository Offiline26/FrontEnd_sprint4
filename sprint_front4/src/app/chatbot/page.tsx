import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import logo from '@/public/logo.png'
import PostmanButton from "@/components/Postman";


export default function ChatBot() {
    return (
        <main>
            <section className="bot1">
                <header className="bot15"><Link href='/' className="cor">SAIR</Link></header>

                <div className="bot2"><Image src={logo} className="logo" alt="logo" /></div>

                <div className="bot3">Bem vindo ao Chat da Auto Aid!</div>
                <section className="box">
                    <section className="box1">
                        <div className="bot8">Meu motor está fazendo um barulho estranho</div>

                        <div className="bot10">O Bot vai fazer um estudo de problemas, fazer algumas perguntas e te dar um possivel
                            diagnostico</div>
                    </section>
                    <section className="box2">
                        <div className="bot9">O escapamento está soltando um cheiro incomum</div>

                        <div className="bot11">Quando a situação requer experiências humanas para ser resolvido, o Bot te encaminha
                            para
                            um
                            mecânico mais próximo!</div>
                    </section>
                </section>
                <div><input type="text" name="Digite como posso te ajudar..." className="bot4" /></div>
            </section>
        </main>
    );
}