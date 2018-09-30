import { Injectable } from "@angular/core";

@Injectable()
export class BebidaProvider {

  constructor() { }

  public static getBebidas() {
    return [{
      id: "coca",
      name: "Coca-Cola LATA",
      src: "../../assets/imgs/bebidas/coca.png",
      quantidade: 0,
      preco: 5,
    },  {
     id: "sprite",
    name: "Sprite LATA",
    src: "../../assets/imgs/bebidas/sprite.png",
    quantidade: 0,
    preco: 5,
   },{
      id: "guarana",
      name: "Guarana LATA",
      src: "../../assets/imgs/bebidas/guara.png",
      quantidade: 0,
      preco: 5,},
    {
      id: "coca-ks",
      name: "Coca Cola KS",
      src: "../../assets/imgs/bebidas/coca-ks.png",
      quantidade: 0,
      preco: 4,
    },{
      id: "GuaraJesus",
      name: "Guarana Jesus Lata",
      src: "../../assets/imgs/bebidas/chessus.png",
      quantidade: 0,
      preco: 8,},{
      id: "sucolaranja",
      name: "Suco de Laranja",
      src: "../../assets/imgs/bebidas/sucolaranja.png",
      quantidade: 0,
      preco: 6,
    }];
  }
}
