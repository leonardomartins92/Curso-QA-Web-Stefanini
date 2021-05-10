package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class FinalizarPedidoPage extends MetodosUteis {
protected WebDriver driver;

	
	public FinalizarPedidoPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.ID, using = "finish")
	private WebElement btnFinalizar;
	
	@FindBy (how = How.ID, using = "checkout_complete_container")
	private WebElement pedidoCompleto;
		
	public void acionarBtnFinalizar() {
		esperarElemento(btnFinalizar);
		btnFinalizar.click();
	}
	
	public void validaPedido() {
		assertTrue(pedidoCompleto.isDisplayed());
	}
	
	
	
}
