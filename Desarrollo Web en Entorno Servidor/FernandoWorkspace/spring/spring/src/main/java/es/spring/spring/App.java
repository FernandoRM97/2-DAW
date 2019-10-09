package es.spring.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import es.spring.beans.AppConfig;
import es.spring.beans.AppConfig2;
import es.spring.beans.Mundo;
import es.spring.beans.Persona;

public class App {
	
	public static void main(String args[]) {
		
		// Cogiendo la configuración desde el archivo XML
		
		ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
		
		Mundo m = contexto.getBean("mundo", Mundo.class);
		
		System.out.println(m.getSaludo());
	
		contexto.close();
		
		// Cogiendo la configuración desde una clase con anotaciones 
		
		AnnotationConfigApplicationContext contexto2 = new AnnotationConfigApplicationContext();
		contexto2.register(AppConfig.class);
		contexto2.register(AppConfig2.class);
		contexto2.refresh();
		
		Mundo m2 = contexto2.getBean("marte", Mundo.class);
		
		System.out.println(m2.getSaludo());
		
		((ConfigurableApplicationContext) contexto2).close();
		
		// Configuración desde XML y constructor con parámetros
		
		ApplicationContext appContext = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
		
		Persona per = appContext.getBean("persona", Persona.class);
		
		System.out.println(per.getId() + " " + per.getNombre() + " " + per.getApodo());
		
		((ConfigurableApplicationContext) appContext).close();
		
		
	}
}
