package stepdefinitions;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.CheckoutPage;

public class CheckoutSteps {
	
	@Quando("^adicionar o campo de nome como \"([^\"]*)\"$")
	public void adicionar_o_campo_de_nome_como(String arg1) throws Throwable {
		CheckoutPage cp = new CheckoutPage(Hooks.getDriver());
		cp.preencherCampoNome(arg1);
	}

	@Quando("^adicionar o campo de sobrenome como \"([^\"]*)\"$")
	public void adicionar_o_campo_de_sobrenome_como(String arg1) throws Throwable {
		CheckoutPage cp = new CheckoutPage(Hooks.getDriver());
		cp.preencherCampoSobrenome(arg1);
	}

	@Quando("^adicionar o campo de codigo postal como \"([^\"]*)\"$")
	public void adicionar_o_campo_de_codigo_postal_como(String arg1) throws Throwable {
		CheckoutPage cp = new CheckoutPage(Hooks.getDriver());
		cp.preencherCampoCep(arg1);
	}

	@Quando("^acionar o botao de continuar$")
	public void acionar_o_botao_de_continuar() throws Throwable {
		CheckoutPage cp = new CheckoutPage(Hooks.getDriver());
		cp.acionarBtnContinue();
	}

	@Entao("^devera surgir a descricao da ordem de compra$")
	public void devera_surgir_a_descricao_da_ordem_de_compra() throws Throwable {
		CheckoutPage cp = new CheckoutPage(Hooks.getDriver());
		cp.validarCheckout();
	}

}
