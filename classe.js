const guerreiro = {
  hp: 300,
  ataque: 7,
  defesa: 10,
  magia: 3,
  golpe: "Golpe Giratório",
};

const ninja = {
  hp: 100,
  ataque: 8,
  defesa: 0,
  magia: 2,
  furtividade: 10,
  golpe: "Estocada",
};

const monge = {
  hp: 150,
  ataque: 10,
  defesa: 5,
  magia: 5,
  golpe: "Punho Equilibrado",
};

const mago = {
  hp: 100,
  ataque: 8,
  defesa: 2,
  magia: 10,
  golpe: "Bola de fogo",
};

const vilao = {
  nome: "Malamar",
  hp: 500,
  ataque: 10,
  defesa: 5,
  magia: 5,
};

function Heroi(nome, idade, tipo) {
  this.nome = nome;
  this.idade = idade;
  this.tipo = tipo;

  this.atacar = function () {
    let dano =
      this.tipo.ataque +
      this.tipo.ataque * this.tipo.magia * (this.tipo.furtividade || 1);

      if (this.tipo === guerreiro) {
        dano *= 1.5; 
      } else if (this.tipo === ninja && this.tipo.furtividade > 5) {
        dano *= 2;
      } else if (this.tipo === mago) {
        dano *= 2; 
      } else if (this.tipo === monge) {
        dano *= 1; 
      }

    console.log(
      `O ${this.nome} atacou usando "${
        this.tipo.golpe
      }" e causou ${dano.toFixed()} pontos de dano`
    );
    return dano;
  };
}



//const heroi = new Heroi("Arthur", 20, guerreiro);
//const heroi = new Heroi("Merle", 25, mago);
//const heroi = new Heroi("Diana", 30, ninja);
const heroi = new Heroi("Mon", 35, monge);

for (let i = 1; vilao.hp > 0 && heroi.tipo.hp > 0; i++) {
  console.log(`\nTurno ${i}:`);
  

  const danoCausado = heroi.atacar();
  const danoRecebido = Math.max(
    vilao.ataque * (vilao.magia / 2) - heroi.tipo.defesa * 2,
    0
  );

  vilao.hp -= Math.max(danoCausado - (vilao.defesa + vilao.magia), 0);
  heroi.tipo.hp -= danoRecebido;

  console.log(`Vida restante do ${vilao.nome}: ${Math.max(vilao.hp, 0)}`);
  console.log(
    `${vilao.nome} atacou com "Definhe" e causou ${danoRecebido.toFixed()} pontos de dano`
  );
  console.log(
    `Vida restante de ${heroi.nome}: ${Math.max(heroi.tipo.hp, 0)}`
  );


  if (vilao.hp <= 0 && heroi.tipo.hp > 0) {
    console.log(`\n${vilao.nome} foi derrotado!`);
    break;
  } else if (heroi.tipo.hp <= 0 && vilao.hp > 0) {
    console.log(`\n${heroi.nome} foi derrotado!`);
    break;
  }
}

if (vilao.hp <= 0 && heroi.tipo.hp <= 0) {
  console.log("\nAmbos foram derrotados! Empate!");
}
