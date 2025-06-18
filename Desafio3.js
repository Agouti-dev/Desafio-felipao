class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = " magia.";
                break;
            case "guerreiro":
                ataque = "espada.";
                break;
            case "monge":
                ataque = " artes marciais.";
                break;
            case "ninja":
                ataque = " shuriken.";
                break;
                case "cavaleiro.":
                ataque = " brandir lança.";
                break;
            default:
                ataque = "usou um ataque desconhecido"; // Para tipos não listados
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Exemplos de uso ---
console.log("--- Testando os Heróis ---");

// Criando instâncias de heróis
const heroiMago = new Heroi("Gandalf", 1000, "mago");
const heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
const heroiMonge = new Heroi("Aang", 112, "monge");
const heroiNinja = new Heroi("Hanzo", 28, "ninja");
const heroiCavaleiro = new Heroi("Tynfras", 40, "cavaleiro"); // new heroiCavaleiro
// Chamando o método atacar para cada herói
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
heroiCavaleiro.atacar();

console.log("\n--- Desafio Extra: Loop e Decisão ---");

// usando laços de repetição e estruturas de decisão
// para criar múltiplos heróis ou simular um jogo simples.
const tiposDisponiveis = ["mago", "guerreiro", "monge", "ninja", "cavaleiro"];
const nomesSugestoes = ["LiXunda", "Kael", "Zuko", "Mai", "Tynfras"];

for (let i = 0; i < 4; i++) {
    const nomeHeroi = nomesSugestoes[i];
    const tipoHeroi = tiposDisponiveis[i];
    const idadeHeroi = 20 + i * 5;
    
    const novoHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
    console.log(`\nHerói ${novoHeroi.nome} (Idade: ${novoHeroi.idade}, Tipo: ${novoHeroi.tipo}) está pronto!`);
    novoHeroi.atacar();
}

// Exemplo de operador e variável
console.log("\n--- Usando Variáveis e Operadores ---");
const danoBase = 10;
const multiplicadorMagia = 1.5;
const danoMago = danoBase * multiplicadorMagia;
console.log(`Dano base: ${danoBase}, Dano de magia: ${danoMago}`);