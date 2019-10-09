package es.spring.springbd;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import es.spring.beans.Marca;
import es.spring.service.ServiceMarca;

public class App {
	
    public static void main( String[] args ) {
    	
    	Marca mar = new Marca();
    	mar.setId(2);
    	mar.setNombre("Marca2");

    	ApplicationContext appContext = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
    	
    	ServiceMarca sm = appContext.getBean("serviceMarcaImpl", ServiceMarca.class);
    	
    	try {
			sm.registrar(mar);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
    
    	((ConfigurableApplicationContext) appContext).close();
    }
}