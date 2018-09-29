import { BebidaProvider } from "../bebida/bebida";
import { ProdutoDTO } from "../produto.dto";


export interface CartItem {
    quantidade: number,
    produto: ProdutoDTO
}