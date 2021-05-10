#language: pt
@Checkout @End2End
Funcionalidade: Checkout

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que esteja logado no sistema
  @RealizarCheckout @SmokeTest
  Esquema do Cenario: Realizar checkout com Sucesso
  	Dado que esteja na pagina do carrinho com o produto "<produto1>" adicionado
    Quando acionar o botao de checkout
    E adicionar o campo de nome como "<nome>"
    E adicionar o campo de sobrenome como "<sobrenome>"
    E adicionar o campo de codigo postal como "<cep>"
    E acionar o botao de continuar
    Entao devera surgir a descricao da ordem de compra
				
	Exemplos:
		| produto1                 | nome       | sobrenome |  cep     |
  	| Sauce Labs Backpack      | Leonardo   | Rodrigues | 36090-300| 
		| Sauce Labs Fleece Jacket | Maria      | Da Silva  | 00000-000|