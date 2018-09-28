import { Injectable } from "@angular/core";

@Injectable()
export class Order implements OrderImpl{

    public name;
    public itens;
    public drinks;
    public sobremesa;

    constructor(name){
        this.name = name;
        this.itens = [];
        this.drinks = [];
        this.sobremesa = [];
    }

}

export interface OrderImpl {

    name: string;
    itens: any[];
    drinks: any[];
    sobremesa: any[];

}