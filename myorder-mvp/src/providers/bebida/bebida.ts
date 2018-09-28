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
    },  {
     id: "coca",
    name: "Coca-Cola Zero LATA",
    src: "../../assets/imgs/bebidas/coca.png",
    quantidade: 0,
   },{
      id: "guarana",
      name: "Guarana LATA",
      src: "../../assets/imgs/bebidas/guara.png",
      quantidade: 0,
      },
    {
      id: "guaranazero",
      name: "Guarana Zero LATA",
      src: "../../assets/imgs/bebidas/guara.png",
      quantidade: 0,
    },{
      id: "GuaraJesus",
      name: "Guarana Jesus Lata",
      src: "../../assets/imgs/bebidas/chessus.png",
      quantidade: 0,
    },{
      id: "sucolaranja",
      name: "Suco de Laranja",
      src: "../../assets/imgs/bebidas/sucolaranja.png",
      quantidade: 0,
     }];
  }
}
