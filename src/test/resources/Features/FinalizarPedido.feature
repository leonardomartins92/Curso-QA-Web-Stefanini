#language: pt
@Pedido @End2End
Funcionalidade: Finalizar Pedido

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que esteja logado no sistema
    
  @RealizarPedido @SmokeTest
  Esquema do Cenario: Realizar pedido com Sucesso
  	Dado que o usuario adicionou o produto "<produto>" ao carrinho
  	E prosseguiu para a pagina de descricao de checkout
  	Quando acionar o botao de finalizar pedido
  	Entao devera surgir a pagina de sucesso da ordem
				
	Exemplos:
		| produto                           | 
  	| Sauce Labs Backpack               | 
		| Test.allTheThings() T-Shirt (Red) | 