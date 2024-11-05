"use client"
import Link from "next/link";
import { useState } from "react";
import { TipoCadastroUser } from "@/types";
import Modal from "../Modal"
import { FaStar } from "react-icons/fa";
import PostmanButton from "@/components/Postman";

export default function Cadastro() {

    const [open, setOpen] = useState(false)


    const idModal = () => {
        setOpen(false)
    }

    const [usuario, setUsuario] = useState<TipoCadastroUser>({
        nome: '',
        cpf: '',
        rg: '',
        datanasci: '',
        email: '',
        senha: '',
        confirm: '',
        cep: '',
        rua: '',
        num: 0,
        compl: '',
        bairro: '',
        cidade: '',
        estado: '',
        titular: '',
        cnh: '',
        placa: '',
        modelo: '',
        ano: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        }

        try {
            const response = await fetch("http://localhost:3000/api/usuario", cabecalho)

            if (response.ok) {
                alert(`${usuario.nome} cadastrado com sucesso!`)
                setUsuario({
                    nome: '',
                    cpf: '',
                    rg: '',
                    datanasci: '',
                    email: '',
                    senha: '',
                    confirm: '',
                    cep: '',
                    rua: '',
                    num: 0,
                    compl: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    titular: '',
                    cnh: '',
                    placa: '',
                    modelo: '',
                    ano: 0,
                })
                setOpen(true)
            } else {
                alert("Erro ao cadastrar!")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o produto", error);
        }
    }

    return (
        <main>
            <header id="title1_cadastro">
                <h1 className="font-bold text-5xl mt-10">Cadastro Auto Aid</h1>
            </header>

            <section className="aoutline">
                <article id="sair_cadastro"><Link href="/" >Sair</Link></article>

                <article id="title2_cadastro">Informações Pessoais</article>
            </section>
            <form onSubmit={handleSubmit}>
                <section className="box1cad">
                    <article className="art11">
                        <label htmlFor="nomecad" id="texto11_cadastro">*Nome Completo:</label>
                        <input type="text" required name="nome" id="nomecad" className="barras11_cadastro" value={usuario.nome} onChange={handleChange} />
                    </article>
                    <article className="art12">
                        <label htmlFor="cpfcad" id="texto12_cadastro">*CPF:</label>
                        <input type="text" required name="cpf" id="cpfcad" className="barras12_cadastro" value={usuario.cpf} onChange={handleChange} />
                    </article>
                    <article className="art13">
                        <label htmlFor="recad" id="texto13_cadastro">*RG:</label>
                        <input type="text" required name="rg" id="rgcad" className="barras13_cadastro" value={usuario.rg} onChange={handleChange} />
                    </article>
                </section>
                <section className="box2cad">
                    <article className="art21">
                        <label htmlFor="datacad" id="texto21_cadastro">Data de Nascimento:</label>
                        <input type="text" name="datanasci" id="datacad" className="barras21_cadastro" placeholder="dd/mm/aaaa" value={usuario.datanasci} onChange={handleChange} />
                    </article>
                </section>
                <section className="box3cad">
                    <article className="art31">
                        <label htmlFor="emailcad" id="texto31_cadastro">*Email:</label>
                        <input type="text" required id="emailcad" name="email" className="barras31_cadastro" value={usuario.email} onChange={handleChange} />
                    </article>
                    <article className="art32">
                        <label htmlFor="senhacad" id="texto32_cadastro" >*Senha:</label>
                        <input type="password" name="senha" required className="barras32_cadastro" id="senhacad" value={usuario.senha} onChange={handleChange} />
                    </article>
                    <article className="art33">
                        <label htmlFor="confirmcad" id="texto33_cadastro">*Confirmar Senha:</label>
                        <input type="password" required name="confirm" id="confirmcad" className="barras33_cadastro" value={usuario.confirm} onChange={handleChange} />
                    </article>
                </section>
                <section className="box4cad">
                    <article className="art41">
                        <label htmlFor="cepcad" id="texto41_cadastro">*CEP:</label>
                        <input type="text" required name="cep" id="cepcad" className="barras41_cadastro" value={usuario.cep} onChange={handleChange} />
                    </article>
                    <article className="art42">
                        <label htmlFor="ruacad" id="texto42_cadastro">*Rua:</label>
                        <input type="text" required name="rua" id="ruacad" className="barras42_cadastro" value={usuario.rua} onChange={handleChange} />
                    </article>
                    <article className="art43">
                        <label htmlFor="numcad" id="texto43_cadastro">*Nº:</label>
                        <input type="number" required name="num" id="numcad" className="barras43_cadastro" value={usuario.num} onChange={handleChange} />
                    </article>
                    <article className="art44">
                        <label htmlFor="complcad" id="texto44_cadastro">Compl:</label>
                        <input type="text" name="compl" id="complcad" className="barras44_cadastro" value={usuario.compl} onChange={handleChange} />
                    </article>
                </section>
                <section className="box5cad">
                    <article className="art51">
                        <label htmlFor="bairrocad" id="texto51_cadastro">*Bairro:</label>
                        <input type="text" required name="bairro" id="bairrocad" className="barras51_cadastro" value={usuario.bairro} onChange={handleChange} />
                    </article>
                    <article className="art52">
                        <label htmlFor="cidadecad" id="texto52_cadastro">*Cidade:</label>
                        <input type="text" required name="cidade" id="cidadecad" className="barras52_cadastro" value={usuario.cidade} onChange={handleChange} />
                    </article>
                    <article className="art53">
                        <label htmlFor="estadocad" id="texto53_cadastro">*Estado:</label>
                        <input type="text" required name="estado" id="estadocad" className="barras53_cadastro" value={usuario.estado} onChange={handleChange} />
                    </article>
                </section>
                <section className="inline">
                    <article id="title6_cadastro">Informações do Veículo</article>
                </section>
                <section className="box6cad">
                    <article className="art61">
                        <label htmlFor="titucad" id="texto61_cadastro">*Titular do Veículo:</label>
                        <input type="text" required name="titular" id="titucad" className="barras61_cadastro" value={usuario.titular} onChange={handleChange} />
                    </article>
                    <article className="art62">
                        <label htmlFor="cnhcad" id="texto62_cadastro">*CNH:</label>
                        <input type="text" required name="cnh" id="cnhcad" className="barras62_cadastro" value={usuario.cnh} onChange={handleChange} />
                    </article>
                    <article className="art63">
                        <label htmlFor="placacad" id="texto63_cadastro">*Placa do carro:</label>
                        <input type="text" required name="placa" id="placacad" className="barras63_cadastro" value={usuario.placa} onChange={handleChange} />
                    </article>
                </section>
                <section className="box7cad">
                    <article className="art71">
                        <label htmlFor="modelocad" id="texto51_cadastro">Modelo do Veículo:</label>
                        <input type="text" name="modelo" id="modelocad" className="barras71_cadastro" value={usuario.modelo} onChange={handleChange} />
                    </article>
                    <article className="art72">
                        <label htmlFor="anocad" id="texto52_cadastro">Ano do Veículo:</label>
                        <input type="number" name="ano" id="anocad" className="barras72_cadastro" value={usuario.ano} onChange={handleChange} />
                    </article>
                </section>
                <button className="flex justify-self-center bg-[#3A4354] hover:bg-[#2a303b] hover:scale-105 transition duration-200 w-1/6 mt-16 mb-10 ml-80 rounded-xl border-2 font-bold text-white p-4 text-2xl drop-shadow-lg" onClick={() => idModal()}>Concluir o Cadastro</button>
            </form>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <FaStar size={56} className="mx-auto hover:text-yellow-500 hover:scale-150 transition duration-200" />
                    <h3 className="text-lg font-black text-gray-800" >Você se cadastrou!</h3>
                    <p className="text-gray-500 text-sm">Agora você pode voltar ao menu e continuar explorandoo nosso site</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-light w-full" onClick={() => setOpen(false)}><Link href={"/"} className=" hover:text-gray-300">Voltar ao Menu</Link></button>
                </div>
            </Modal>

        </main >
    );

} 