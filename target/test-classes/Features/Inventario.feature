#language: pt
@Inventario @End2End
Funcionalidade: Inventario

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que esteja logado no sistema
  @AdicionarProduto
  Esquema do Cenario: Adicionar Produto com Sucesso
   	Quando acionar o botao adicionar ao carrinho do produto de nome "<produto1>"
    E acionar o outro botao adicionar ao carrinho do produto de nome "<produto2>"
    Entao o sistema devera apresentar os dois produtos na lista do carrinho.
	
	Exemplos:
	| produto1                 | produto2                           |
  | Sauce Labs Backpack      | Test.allTheThings() T-Shirt (Red)  |
	| Sauce Labs Fleece Jacket | Sauce Labs Onesie                  |