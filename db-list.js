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
  autualizar = (idParam, produtoAtualizado) => {
    const produtoBD = this.listarPorId(idParam)
    console.log('produtoBD', produtoBD);

    if(produtoBD){
      produtoBD.nome = produtoAtualizado.nome
      produtoBD.modelo = produtoAtualizado.modelo
      produtoBD.preco = produtoAtualizado.preco


    }
  };
  excluir = (idParam) => {
    let indexProduto = this.produto.findIndex(produto => produto.id === idParam)
    return this.produtos.splice(indexProduto, 1)
  };
}
