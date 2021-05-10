package stepdefinitions;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.CarrinhoPage;
import pageobjects.InventarioPage;

public class CarrinhoSteps {
	
	private String produto;
	
	@Quando("^acionar o botao de checkout$")
	public void acionar_o_botao_de_checkout() throws Throwable {
		CarrinhoPage cp = new CarrinhoPage(Hooks.getDriver());
	    cp.acionarBtnChechout();
	}
	
	@Quando("^o produto \"([^\"]*)\" esta no carrinho$")
	public void o_produto_esta_no_carrinho(String arg1) throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		this.produto = arg1;
		ip.acionarBtnProduto1(arg1);
		ip.acionarBtnCarrinho();
			}

	@Quando("^o usuario clicar no botao de remover desse item$")
	public void o_usuario_clicar_no_botao_de_remover_desse_item() throws Throwable {
		CarrinhoPage cp = new CarrinhoPage(Hooks.getDriver());
		cp.removerDoCarrinho(produto);
	}


	@Entao("^o item devera ser retirado do carrinho$")
	public void o_item_devera_ser_retirado_do_carrinho() throws Throwable {
		CarrinhoPage cp = new CarrinhoPage(Hooks.getDriver());
		cp.validarRemocao(produto);
	}

}
