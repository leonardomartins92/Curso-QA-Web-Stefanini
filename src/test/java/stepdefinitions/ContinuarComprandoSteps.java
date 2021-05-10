package stepdefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.ContinuarComprandoPage;
import pageobjects.InventarioPage;

public class ContinuarComprandoSteps {
	
	private String produto1;
	private String produto2;
	
	@Dado("^que esteja na pagina do carrinho com o produto \"([^\"]*)\" adicionado$")
	public void que_esteja_na_pagina_do_carrinho_com_o_produto_adicionado(String arg1) throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		this.produto1=arg1;
		ip.acionarBtnProduto1(arg1);
		ip.acionarBtnCarrinho();
	}
			
	@Quando("^o usuario acionar o botao de continuar comprando$")
	public void o_usuario_acionar_o_botao_de_continuar_comprando() throws Throwable {
		ContinuarComprandoPage cp = new ContinuarComprandoPage(Hooks.getDriver());
		cp.clicarBtnContinuar();
	}
	
	@Quando("^clicar no botao adicionar ao carrinho do produto de nome \"([^\"]*)\"$")
	public void clicar_no_botao_adicionar_ao_carrinho_do_produto_de_nome(String arg1) throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		this.produto2=arg1;
		ip.acionarBtnProduto1(arg1);
		ip.acionarBtnCarrinho();
	}

	@Entao("^o item devera ser adicionado ao carrinho$")
	public void o_item_devera_ser_adicionado_ao_carrinho() throws Throwable {
		InventarioPage ip = new InventarioPage(Hooks.getDriver());
		ip.validarAdicao(produto2, produto1);
		
	}
}
