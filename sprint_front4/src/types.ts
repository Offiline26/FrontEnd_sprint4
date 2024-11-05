export type TipoCadastroUser = {
    nome: string;
    cpf: string;
    rg: string;
    datanasci: string;
    email: string;
    senha: string;
    confirm: string;
    cep: string;
    rua: string;
    num: number;
    compl: string;
    bairro: string;
    cidade: string;
    estado: string;
    titular: string;
    cnh: string;
    placa: string;
    modelo: string;
    ano: number;
}

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

