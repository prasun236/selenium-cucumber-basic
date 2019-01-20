package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps1 {
	
		
	
    @Given("^Blank Test$")					
    public void Blank_Test() throws Throwable							
    {		
    	System.out.println("Blank Test Print");				
    }		


}
