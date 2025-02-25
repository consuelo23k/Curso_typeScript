/*interface Carro {
    marca: string;
    nome: string;
    motor: number;
    vendido: boolean;
    detalhes(): void;
  }
  
  class Produto implements Carro {
    marca: string;
    nome: string;
    motor: number;
    vendido: boolean;
  
    constructor(marca: string, nome: string, motor: number, vendido: boolean) {
      this.marca = marca;
      this.nome = nome;
      this.motor = motor;
      this.vendido = vendido;
    }
  
    detalhes(): void {
      const foiVendido = this.vendido ? "Sim" : "Não";
      console.log(
        `O carro é um ${this.nome} fabricado pela ${this.marca}. Foi vendido? ${foiVendido}`
      );
    }
  }
  
  const mustang = new Produto("Ford", "Mustang", 5.0, true);
  const opala = new Produto("Chevrolet", "Opala", 4.1, false);
  
  const estoque: Carro[] = [];
  estoque.push(opala);
  estoque.push(mustang);
  estoque.forEach((carro: Carro) => {
    carro.detalhes();
  });
  */
