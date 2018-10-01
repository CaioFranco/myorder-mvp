import { Injectable } from "@angular/core";

@Injectable()
export class SobremesaProvider {

  constructor() { }

  public static getSobremesas() {
    return [{
      id: "oreo",
      name: "Oreo Tower",
      src: "../../assets/imgs/sobremesas/oreo.png",
      quantidade: 0,
      preco: 18,
    },  {
        id: "petit",
       name: "Petit-Gateau",
       src: "../../assets/imgs/sobremesas/petit-gateau.png",
       quantidade: 0,
       preco: 12,
      },  {
        id: "pudim",
       name: "Pudim",
       src: "../../assets/imgs/sobremesas/pudim.png",
       quantidade: 0,
       preco: 6,
      },  {
        id: "torta",
       name: "Torta de Limão",
       src: "../../assets/imgs/sobremesas/torta-limao.png",
       quantidade: 0,
       preco: 6,
      }];
  }
}
