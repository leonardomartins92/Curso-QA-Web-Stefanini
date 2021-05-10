package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class CarrinhoPage extends MetodosUteis {

protected WebDriver driver;

		
	public CarrinhoPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
		
	@FindBy (how = How.ID, using = "checkout")
	private WebElement btnCheckout;
	
	public void acionarBtnChechout() {
		esperarElemento(btnCheckout);
		btnCheckout.click();
	}
	
	public void removerDoCarrinho(String nomeProduto) {
		nomeProduto = nomeProduto.replace(" ","-");
		nomeProduto = nomeProduto.toLowerCase();
		WebElement btnRemover = driver.findElement(By.id("remove-"+nomeProduto));
		btnRemover.click();
	}
	
	
	public void validarRemocao(String produto) {
		Boolean isPresent = driver.findElements(By.linkText(produto)).size() > 0;
		assertTrue(!isPresent);
	}
}
