# Contador Global com Navegação e Reset

Este é um aplicativo React Native que utiliza Redux para gerenciar um contador global. O contador pode ser incrementado, decrementado e resetado, e o valor é refletido em duas telas diferentes. A navegação entre as telas é feita usando React Navigation.

## Funcionalidades

- **Contador Global**: O contador é gerenciado globalmente usando Redux, permitindo que o valor seja acessado e atualizado em qualquer tela.
- **Navegação entre Telas**: O aplicativo possui duas telas (`ScreenA` e `ScreenB`) que podem ser navegadas usando React Navigation.
- **Botões de Controle**: Cada tela possui botões para incrementar, decrementar e resetar o contador.
- **Reset Global**: O botão "Resetar" redefine o contador para zero em todas as telas simultaneamente.

## Estrutura do Projeto

- **`App.js`**: Configura o Redux Provider e a navegação do aplicativo.
- **`store.js`**: Configura o Redux Store.
- **`counterSlice.js`**: Define o Redux Slice para o contador, incluindo as ações `increment`, `decrement` e `reset`.
- **`ScreenA.js`**: Primeira tela do aplicativo, exibe o contador e os botões de controle.
- **`ScreenB.js`**: Segunda tela do aplicativo, também exibe o contador e os botões de controle.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/EduardoTaz/CRONOMETRO-REDUX.git
   cd CRONOMETRO-REDUX

2. **Instalar dependências**:
   ```bash
   npm install

3. **Iniciar aplicativo**:
   ```bash
   npx expo start


Baixe o aplicativo expo no celular e escaneie o QR code, ou inicie em um emulador android studio
