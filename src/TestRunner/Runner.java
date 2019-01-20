package TestRunner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "Features", glue = {	"StepDefinition" }, monochrome = true)

//tags allows which features to run ; if we remove tags then all features will be executed
//@CucumberOptions(features = "Features", glue = {	"StepDefinition" }, monochrome = true, tags = "@SmokeTest")

public class Runner {

}

