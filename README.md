# Cadastro de contatos

# Projeto Gesuas
## Teste de front-end para o processo de seleção da empresa Gesuas.

Projeto de cadastro de contatos, no qual é possível visualizar, cadastrar, editar e excluir um contato. Os dados são armazenados na API utilizando o **JSON Server**.

### Tecnologias do projeto
**Bootstrap:** Escolhi o Bootstrap porque se trata de um site simples, com poucas estilizações, e é uma biblioteca que já domino.

**Vue:** Optei por utilizar Vue devido à minha familiaridade com a tecnologia, o que facilitou o desenvolvimento da aplicação com maior velocidade e agilidade.

**Axios:** Utilizei o Axios para realizar a requisição dos dados da API, pois é uma biblioteca com a qual já estou familiarizado e que oferece facilidade de uso.

**Cypress:** Utilizei o Cypress para realizar os testes automatizados, devido a minha familiaridade com a tecnologia, pois já trabalhei com o mesmo em projetos anteriores.

**Vuex:** Utilizado para gerenciar o estado das aplicações do projeto.

### Projeto composto por:
- Foi adicionado um input CEP no cadastro, que ao inserir o cep correto, automaticamente já são carregados os campos de bairro, endereço e cidade utilizando da import **ApiCep from '@/api/cep**.
- Senão tiver nenhum registro cadastrado é exibido uma tela com a frase "Você ainda não possui nenhum contato cadastrado.", com um botão para redirecionar para a página de cadastros.
- Ao inserir uma url inválida é exibida uma pagina de erro.
- Após o cadastro ser realizado com sucesso é possivel visualizar(modal), editar e excluir o registro.
- Modal com a visualização do contato cadastrado.
- Ao interromper o JSON Server é exibido um aviso na tela de cadastro "Desculpe, mas houve um erro ao buscar os dados!".
- Alguns ajustes para ser melhor exibido em dispositivos menores e favicon.

# Configuração do Vue
## Project setup
Na raiz do projeto rodar:
```
npm install
```
Para instalar os pacotes do NPM.

### Compiles and hot-reloads for development
Em seguida rodar:
```
npm run serve
```

Para abrir a versão de desenvolvimento.
Abrir [http://localhost:8080](http://localhost:8080) para visualizar no browser.

A página será recarregada quando houver mudanças salvas no código.

### Compiles and minifies for production
Para visualizar a versão de build, rodar:
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Configuração do JSON Server
Para criar o servidor, entrar na pasta `db`:
```
cd db
```
E rodar:
```
npm start
```
Para verificar se o servidor foi levantado corretarmente, acessar a url [http://localhost:3000](http://localhost:3000) para visualizar no browser.

# Configuração do Cypress

no terminal rodar:
```
npx cypress open
```

