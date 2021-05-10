#language: pt
@Carrinho @End2End
Funcionalidade: Remover 

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que esteja logado no sistema
    
  @AdicionarProduto
  Esquema do Cenario: Remover Produto com Sucesso
  Quando o produto "<item>" esta no carrinho
  E o usuario clicar no botao de remover desse item 
  Entao o item devera ser retirado do carrinho
  
  Exemplos:
  | item                            |
  | Sauce Labs Backpack             |
  | Test.allTheThings() T-Shirt (Red)|
  