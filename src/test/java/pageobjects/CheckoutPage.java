package pageobjects;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class CheckoutPage extends MetodosUteis {
	
	public CheckoutPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	
	
	@FindBy (how = How.ID, using = "first-name")
	private WebElement campoNome;
	
	@FindBy (how = How.ID, using = "last-name")
	private WebElement campoSobrenome;
	
	@FindBy (how = How.ID, using = "postal-code")
	private WebElement campoCep;
	
	@FindBy (how = How.ID, using = "continue")
	private WebElement btnContinue;
	
	@FindBy (how = How.ID, using = "checkout_summary_container")
	private WebElement checkoutDescricao;
		
		
	public void preencherCampoNome(String nome) {
		esperarElemento(campoNome);
		campoNome.sendKeys(nome);
	}
	
	public void preencherCampoSobrenome(String sobrenome) {
		esperarElemento(campoSobrenome);
		campoSobrenome.sendKeys(sobrenome);
	}
	
	public void preencherCampoCep(String cep) {
		esperarElemento(campoCep);
		campoCep.sendKeys(cep);
	}
	
	public void acionarBtnContinue() {
		esperarElemento(btnContinue);
		btnContinue.click();
	}
	
	public void validarCheckout() {
		assertTrue(checkoutDescricao.isDisplayed());
		
	}
	
}
