# Descrição

Script em Node.js para buscar todos os jogos na Steam, sem soundtracks, DLCs e demos, com um filtro e que salva em um arquivo .json

## Pré-requisitos

+ Node.js
+ Uma chave de API da Steam Web API. Para criar uma nova acesse https://steamcommunity.com/dev/apikey

## Instalação

+ Clone o repositório ou baixe o código fonte.
+ Na pasta do projeto, crie um arquivo .env com as suas credenciais, conforme o exemplo fornecido.
+ Abra o terminal e navegue até a pasta do projeto.
+ Execute o comando npm install para instalar as dependências.
+ Execute o comando npm start para iniciar o script.

## Configuração

+ O arquivo .env é usado para definir as variáveis de ambiente usadas pelo script:

    BLACKLIST: uma lista de termos separados por vírgulas para excluir jogos que contenham esses termos no nome. Por exemplo: `BLACKLIST=soundtrack,hentai`.
    FILE_NAME: o nome do arquivo de saída. Por exemplo: `FILE_NAME=steam.json`.
    STEAM_API_KEY: a chave de API da Steam Web API. Por exemplo: `STEAM_API_KEY=API_KEY`.
    STEPS: o número máximo de jogos para buscar por vez. Por exemplo: `STEPS=50000`.
