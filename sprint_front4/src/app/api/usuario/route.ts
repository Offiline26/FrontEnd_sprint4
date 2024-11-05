import { TipoCadastroUser } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
    const produtos = JSON.parse(file);

    return NextResponse.json(produtos);

}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8')
    const data = JSON.parse(file)
    const { nome, cpf, rg, datanasci, email, senha, confirm, cep, rua, num, compl, bairro, cidade, estado, titular, cnh, placa, modelo, ano } = await request.json()
    const usuario = { nome, cpf, rg, datanasci, email, senha, confirm, cep, rua, num, compl, bairro, cidade, estado, titular, cnh, placa, modelo, ano } as TipoCadastroUser
    data.push(usuario)
    const json = JSON.stringify(data)
    await fs.writeFile(process.cwd() + '/src/data/base.json', json)
    return NextResponse.json(cpf)
}

