#language: pt
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema

  @RealizarLogin @SmokeTest
  Esquema do Cenario: Realizar Login com Sucesso
    Quando informar o campo Username como "<usuario>"
    E informar o campo Password como "<senha>"
    E clicar no botao Login
    Entao o sistema devera autorizar o login, exibindo pagina contendo os Produtos.
				
	Exemplos:
		| usuario                |     senha    |
    | standard_user          | secret_sauce |
		| locked_out_user        | secret_sauce |
		| problem_user           | secret_sauce |
		| performance_glitch_user| secret_sauce |