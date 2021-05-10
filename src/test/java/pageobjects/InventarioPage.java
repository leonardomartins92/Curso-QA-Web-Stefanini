package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class InventarioPage extends MetodosUteis {

protected WebDriver driver;
	
	public InventarioPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
		
	@FindBy (how = How.ID, using = "shopping_cart_container")
	private WebElement btnCarrinho;
	
	public void acionarBtnProduto1(String produto) {
		produto = produto.replace(" ","-");
		produto = produto.toLowerCase();		
		WebElement btnProduto1 = driver.findElement(By.id("add-to-cart-"+produto));
		btnProduto1.click();
	}
	
	public void acionarBtnProduto2(String produto) {
		produto = produto.replace(" ","-");
		produto = produto.toLowerCase();
		WebElement btnProduto2 = driver.findElement(By.id("add-to-cart-"+produto));
		btnProduto2.click();
	}
	
	public void acionarBtnCarrinho() {
		esperarElemento(btnCarrinho);
		btnCarrinho.click();
	}
	
	public void validarAdicao(String p1, String p2) {
		btnCarrinho.click();
		WebElement produto1 = driver.findElement(By.linkText(p1));
		WebElement produto2 = driver.findElement(By.linkText(p2));
		Boolean validacao = false;
		if(produto1.isDisplayed() && produto2.isDisplayed()) { validacao = true;}
		assertTrue(validacao);
		
	}
}
