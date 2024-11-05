import Link from "next/link";
import PostmanButton from "@/components/Postman";

export default function Login() {
    return (
        <section className="all">
            <Link href="/" className="login24">SAIR</Link>
            <section className="box1log">
                <header className="login11">
                    <h1>LOGIN</h1>
                </header>
            </section>
            <form>
                <section className="box2log">
                    <section className="box21log">
                        <label htmlFor="idcpf" className="login3">CPF:</label>
                        <input type="text" name="cpf" id="idcpf" className="login12" />
                    </section>

                    <section className="box22log">
                        <label htmlFor="idsenha" className="login4">Senha:</label>
                        <input type="password" name="senha" className="login2" id="idsenha" />
                    </section>
                </section>

                <section className="box3log">
                    <button className="login18" type="submit">Entrar</button>
                </section>
            </form>
            <section className="box4log">
                <div className="login19"><Link href="/cadastro">Ainda não está registrado?|cadastre-se</Link></div>
            </section>
        </section>
    );
}