import React, { useState } from 'react';
import './App.css'

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function App() {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [pontuacaoJogador, setPontuacaoJogador] = useState(0);
  const [pontuacaoComputador, setPontuacaoComputador] = useState(0);
  const [vencedor, setVencedor] = useState(null);

  const getEscolhaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[indiceAleatorio];
  };

  const resetarJogo = () => {
    setEscolhaJogador(null);
    setEscolhaComputador(null);
    setPontuacaoJogador(0);
    setPontuacaoComputador(0);
    setVencedor(null);
  };

  const jogarRodada = (escolha) => {
    if (vencedor) {
      return;
    }

    const escolhaComputador = getEscolhaAleatoria();

    setEscolhaJogador(escolha);
    setEscolhaComputador(escolhaComputador);

    if (escolha === escolhaComputador) {
    } else if (
      (escolha === 'Pedra' && escolhaComputador === 'Tesoura') ||
      (escolha === 'Papel' && escolhaComputador === 'Pedra') ||
      (escolha === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
      setPontuacaoJogador(pontuacaoJogador + 1);
    } else {
      setPontuacaoComputador(pontuacaoComputador + 1);
    }
    if (pontuacaoJogador === 3) {
      setVencedor('Jogador');
    } else if (pontuacaoComputador === 3) {
      setVencedor('Computador');
    }
  };

  return (
    <div className="App">
      <div className="opcoes">
        <button onClick={() => jogarRodada('Pedra')}>Pedra</button>
        <button onClick={() => jogarRodada('Papel')}>Papel</button>
        <button onClick={() => jogarRodada('Tesoura')}>Tesoura</button>
      </div>
      <div className="resultados">
        {escolhaJogador && <p>Jogador escolheu: {escolhaJogador}</p>}
        {escolhaComputador && <p>Computador escolheu: {escolhaComputador}</p>}
        {vencedor && (
          <div>
            <p>{vencedor} é o vencedor!</p>
            <button onClick={resetarJogo}>Recomeçar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;