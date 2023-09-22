import { randomUUID } from "crypto";

export class DataBaseTemp {
  produtos = [];
  adicionar = (produto) => {
    console.log('produto_antes', produto)

    //add propidade com ID aleatorio
    produto.id = randomUUID()

    console.log('produto_depois', produto);
    return this.produtos.push(produto);
  };
  listarTodos = () => {
    return this.produtos;
  };
  listarPorId = (idParam) => {
    return this.produtos.find(produto => produto.id === idParam)
  };
  autualizar = () => {};
  excluir = () => {};
}
