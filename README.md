# Listagem de Livros usando React Native e Firebase
Este projeto é uma aplicação React Native que utiliza Firebase para autenticação e armazenamento de dados. A estrutura do projeto inclui várias funcionalidades, como login, registro de conta, navegação por abas e listagem de livros. A seguir, uma descrição detalhada dos principais componentes e funcionalidades:

## Estrutura do Projeto
- App.js: O ponto de entrada da aplicação. Configura a navegação entre as telas de Login, Deslogar (navegação por abas) e RegistrarConta.
- Login.js: Tela de login onde os usuários podem entrar com suas credenciais. Utiliza Firebase Authentication para autenticação.
- RegistrarConta.js: Tela de registro onde novos usuários podem criar uma conta. Utiliza Firebase Authentication para registrar novos usuários.
- BottomTabNavigator.js: Configura a navegação por abas na aplicação, incluindo as telas HomeScreen, Cadastrar e Lista.
- HomeScreen.js: Tela inicial que exibe uma breve descrição da aplicação.
- Cadastrar.js: Tela para cadastrar novos livros no Firestore.
- Lista.js: Tela que lista os livros cadastrados no Firestore.

## Funcionalidades

### 1 - Autenticação com Firebase:

- Login.js: Permite que os usuários façam login utilizando email e senha.
- RegistrarConta.js: Permite que novos usuários se registrem utilizando email e senha.

### 2 - Navegação:
- App.js: Configura a navegação entre as telas de Login, Deslogar e RegistrarConta.
- BottomTabNavigator.js: Configura a navegação por abas entre as telas HomeScreen, Cadastrar e Lista.

### 3 - Cadastro e Listagem de Livros:
- Cadastrar.js: Permite que os usuários cadastrem novos livros no Firestore.
- Lista.js: Exibe uma lista de livros cadastrados no Firestore.

Conclusão
Este projeto é uma aplicação React Native que utiliza Firebase para autenticação e armazenamento de dados. Ele inclui funcionalidades de login, registro de conta, navegação por abas e listagem de livros, proporcionando uma experiência completa para o usuário.
