#language: pt
@Carrinho @End2End
Funcionalidade: Carrinho

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que esteja logado no sistema
    
  @ContinuarComprando
  Esquema do Cenario: Adicionar outro Produto com Sucesso
  Dado que esteja na pagina do carrinho com o produto "<produto1>" adicionado
  Quando o usuario acionar o botao de continuar comprando
  E clicar no botao adicionar ao carrinho do produto de nome "<produto2>" 
  Entao o item devera ser adicionado ao carrinho
  
  Exemplos:
  | produto1                         | produto2                          |
  | Sauce Labs Backpack              | Test.allTheThings() T-Shirt (Red) |
  | Test.allTheThings() T-Shirt (Red)| Sauce Labs Bolt T-Shirt           |
  
 	

	