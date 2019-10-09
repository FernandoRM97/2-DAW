package es.spring.springbd;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import es.spring.beans.Jugador;
import es.spring.service.ServiceJugador;

public class App {
	
    public static void main( String[] args ) {

    	ApplicationContext appContext = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
    	
    	ServiceJugador sm = (ServiceJugador) appContext.getBean("serviceJugadorImpl");
    	Jugador jugador = (Jugador) appContext.getBean("jugador1");
    	
    	try {
			sm.registrar(jugador);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
    
    	((ConfigurableApplicationContext) appContext).close();
    }
}