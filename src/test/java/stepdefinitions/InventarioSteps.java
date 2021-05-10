package stepdefinitions;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.InventarioPage;

public class InventarioSteps {
	private String produto1;
	private String produto2;
	
	@Quando("^acionar o botao adicionar ao carrinho do produto de nome \"([^\"]*)\"$")
	public void acionar_o_botao_adicionar_ao_carrinho_do_produto_de_nome(String arg1) throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		this.produto1 = arg1;
		ip.acionarBtnProduto1(arg1);
	}

	@Quando("^acionar o outro botao adicionar ao carrinho do produto de nome \"([^\"]*)\"$")
	public void acionar_o_outro_botao_adicionar_ao_carrinho_do_produto_de_nome(String arg1) throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		this.produto2 = arg1;
		ip.acionarBtnProduto2(arg1);
	}
	
	@Entao("^o sistema devera apresentar os dois produtos na lista do carrinho\\.$")
	public void o_sistema_devera_apresentar_os_dois_produtos_na_lista_do_carrinho() throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		ip.validarAdicao(produto1, produto2);
	}
	
}
