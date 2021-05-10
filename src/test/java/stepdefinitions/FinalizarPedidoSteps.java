package stepdefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.CarrinhoPage;
import pageobjects.CheckoutPage;
import pageobjects.FinalizarPedidoPage;
import pageobjects.InventarioPage;

public class FinalizarPedidoSteps {
	@Dado("^que o usuario adicionou o produto \"([^\"]*)\" ao carrinho$")
	public void que_o_usuario_adicionou_o_produto_ao_carrinho(String arg1) throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		ip.acionarBtnProduto1(arg1);
		ip.acionarBtnCarrinho();
	}

	@Dado("^prosseguiu para a pagina de descricao de checkout$")
	public void prosseguiu_para_a_pagina_de_descricao_de_checkout() throws Throwable {
		CarrinhoPage cp = new CarrinhoPage(Hooks.getDriver());
		CheckoutPage checkpage = new CheckoutPage(Hooks.getDriver());
	    cp.acionarBtnChechout();
	    checkpage.preencherCampoNome("Maria");
	    checkpage.preencherCampoSobrenome("Antonieta");
	    checkpage.preencherCampoCep("36090-000");
	    checkpage.acionarBtnContinue();
	}

	@Quando("^acionar o botao de finalizar pedido$")
	public void acionar_o_botao_de_finalizar_pedido() throws Throwable {
		FinalizarPedidoPage fp = new FinalizarPedidoPage(Hooks.getDriver());
		fp.acionarBtnFinalizar();
		
	}

	@Entao("^devera surgir a pagina de sucesso da ordem$")
	public void devera_surgir_a_pagina_de_sucesso_da_ordem() throws Throwable {
		FinalizarPedidoPage fp = new FinalizarPedidoPage(Hooks.getDriver());
		fp.validaPedido();
	}
}
