const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let candidates = [];

let intervalVotes = null;
let intervalPopularity = null;

const CONSTS = {
  MAX_POPULARITY: 10,
  MIN_POPULARITY: 1,
  MIN_VOTES: 1,
  MAX_VOTES: 1000,
  INTERVAL_VOTES: 100,
  INTERVAL_POPULARITY: 10000,
};

//FUNÇÃO PARA GERAR NUMEROS ALEATORIOS

function generateRandomNumber(from = CONSTS.MIN_VOTES, to = CONSTS.MAX_VOTES) {
  return Math.max(from, Math.ceil(Math.random() * to));
}

//FUNÇÃO PARA MONTAR ESTADO INICIAL DO CANDIDATO

function fillCandidates() {
  candidates = [
    {
      id: 1,
      name: "Marco Minneman",
      votes: 0,
      percentagem: 0,
      popularity: CONSTS.MIN_POPULARITY,
    },
    {
      id: 2,
      name: "Mike Portnoy",
      votes: 0,
      percentagem: 0,
      popularity: CONSTS.MIN_POPULARITY,
    },
    {
      id: 3,
      name: "Neil Peart",
      votes: 0,
      percentagem: 0,
      popularity: CONSTS.MIN_POPULARITY,
    },
  ];
}

// FUNÇÃO PARA SIMULAR OS VOTOS

function simulateVoting() {
  intervalVotes = setInterval(() => {
    candidates.forEach((candidate) => {
      const minVotes = CONSTS.MIN_VOTES;
      const maxVotes = CONSTS.MAX_VOTES * candidate.popularity;

      candidate.votes += generateRandomNumber(minVotes, maxVotes);
    }, CONSTS.INTERVAL_VOTES);
  });
}

// FUNÇÃO PARA SIMULAR POPULARIDADE

function simulatePopularity() {
  intervalPopularity = setInterval(() => {
    candidates.forEach((candidate) => {
      candidate.popularity = generateRandomNumber(
        CONSTS.MIN_POPULARITY,
        CONSTS.MAX_POPULARITY
      );
    }, CONSTS.INTERVAL_POPULARITY);
  });
}

//Rota padrão
app.get("/", (_, res) => {
  res.json({
    message:
      "Bem-Vindo ao módulo votação!" +
      "Acesse /votes para visualizar a votação em tempo real.",
  });
});

//Rota /votes
app.get("/votes", (_, res) => {
  const sortedCandidates = Object.assign([], candidates);
  sortedCandidates.sort((a, b) => b.votes - a.votes);

  const totalVotes = sortedCandidates.reduce((acc, curr) => {
    return acc + curr.votes;
  }, 0);

  sortedCandidates.forEach((candidate) => {
    candidate.percentagem = (candidate.votes / totalVotes) * 100;
  });

  console.log({ candidates: sortedCandidates, totalVotes });

  res.json({ candidates: sortedCandidates, totalVotes });
});

app.listen(8081, () =>
  console.log(`Example app listening at http://localhost:8081`)
);


fillCandidates();
simulateVoting();
simulatePopularity();
