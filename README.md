Auto Aid

Descrição: -O Auto Aid é uma aplicação desenvolvida com Next.js que permite que o usuário se cadastre e registre um carro. O sistema possui uma página de login, e um formulário de cadastro para usuários, além de possibilitar o cadastro de apenas um carro por usuário. As informações são armazenadas no banco de dados, permitindo sua visualização e manipulação posteriormente.

-Funcionalidades: .Cadastro de usuários, incluindo dados pessoais como nome, CPF, RG, data de nascimento, endereço, etc.

.Cadastro de veículos, permitindo associar um único carro por usuário.

.Visualização das informações cadastradas, com acesso restrito baseado no CPF e senha do usuário.

-Tecnologias Utilizadas: .Next.js - Framework React com renderização no lado do servidor e geração de páginas estáticas.

.Tailwind CSS - Framework de CSS para estilização rápida e responsiva.

.API Routes - Utilização de rotas da API do Next.js para comunicação com o backend.

.TypeScript - Tipagem estática para JavaScript, garantindo mais segurança no código.

-Instalação e Configuração

-Siga os passos abaixo para rodar o projeto localmente:

.Clone este repositório: "git clone https://github.com/usuario/auto-aid.git"

-Acesse o diretório do projeto: "cd auto-aid"

-Instale as dependências: "npm install"

-Copie o arquivo ".env.example" para ".env.local" e configure as variáveis de ambiente: "cp .env.example .env.local"

-Certifique-se de configurar as variáveis necessárias, como chaves de API ou URLs de banco de dados, se houver.

-Inicie o servidor de desenvolvimento: "npm run dev"

O projeto estará rodando em http://localhost:3000.

-Variáveis de Ambiente .idModal: Utilizado na página de cadastro para exibir uma janela modal, que é ativada sempre que o cadastro é concluído com sucesso. Esta janela redireciona o usuário para a página principal.

.handleSubmit: Função presente na página de cadastro, responsável por enviar os dados preenchidos para a API, que realiza a manipulação e armazenamento no back-end.

-Endpoints da API

-A aplicação utiliza rotas de API para comunicação com o backend. Os principais endpoints são:

"GET /api/usuarios": Retorna a lista de usuários cadastrados. "POST /api/usuarios": Cadastra um novo usuário com as informações fornecidas. "GET /api/carros?cpf={cpf}": Retorna os carros cadastrados com base no CPF do usuário. "POST /api/carros": Cadastra um novo carro associado ao usuário logado. (Todas as estruturas de GET não funcionaram, então foram removidas de última hora. Estas ainda estão no README.md para simbolizar o objetivo da aplicação)

-Estrutura de Diretórios:

Aqui está a estrutura principal do projeto:

. ├── /public/ # Arquivos públicos como imagens e fontes ├── /src/ # Código-fonte principal do projeto │ ├── /components/ # Componentes reutilizáveis │ ├── /pages/ # Páginas da aplicação (incluindo rotas API) │ ├── /styles/ # Arquivos de estilo (Tailwind CSS) │ ├── /utils/ # Funções utilitárias para o projeto │ └── /data/ # Base de dados simulada (JSON) └── README.md # Documentação do projeto

-Scripts Disponíveis:

No diretório do projeto, você pode executar os seguintes scripts:

"npm run dev": Inicia o servidor de desenvolvimento. "npm run build": Faz o build da aplicação para produção. "npm run start": Inicia o servidor no ambiente de produção.

Mais informações somente no repositório do GITHUB ou no Link para o Video do YT:

GITHUB- YT-https://youtu.be/JmHsCAmsUmQ
