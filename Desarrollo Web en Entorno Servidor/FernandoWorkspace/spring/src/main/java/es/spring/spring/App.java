package es.spring.spring;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import es.spring.beans.AppConfig;
import es.spring.beans.AppConfig2;
import es.spring.beans.Barcelona;
import es.spring.beans.Ciudades;
import es.spring.beans.Jugador;
import es.spring.beans.JugadorEjercicio1;
import es.spring.beans.Juventus;
import es.spring.beans.Mundo;
import es.spring.beans.Persona;
import es.spring.interfaces.Equipo;

public class App {
	
	public static void main(String args[]) {
		
		// Cogiendo la configuración desde el archivo XML
		
		/* ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
		
		Mundo m = contexto.getBean("mundo", Mundo.class);
		
		System.out.println(m.getSaludo());
	
		contexto.close(); */
		
		// Cogiendo la configuración desde una clase con anotaciones 
		
		/* AnnotationConfigApplicationContext contexto2 = new AnnotationConfigApplicationContext();
		contexto2.register(AppConfig.class);
		contexto2.register(AppConfig2.class);
		contexto2.refresh();
		
		Mundo m2 = contexto2.getBean("marte", Mundo.class);
		
		System.out.println(m2.getSaludo());
		
		((ConfigurableApplicationContext) contexto2).close(); */ 
		
		// Configuración desde XML y constructor con parámetros
		
		/* Persona per = appContext.getBean("persona", Persona.class);
		
		String nombreCiudades = "";
		
		for (Ciudades ciu : per.getPais().getCiudades()) {
			nombreCiudades += ciu.getNombre() + "-";	
		}
		
		System.out.println(per.getId() + " " + per.getNombre() + " " + per.getApodo() + " " 
						 + per.getPais().getNombre() + " " +per.getCiudades().getNombre());
		*/
		
		//ApplicationContext appContext = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
		
		// Jugador jug = appContext.getBean("messi", Jugador.class);
		// System.out.println(jug.getNombre() + " " + jug.getEquipo().mostrar() + " " + jug.getNumero());
		
		/* Equipo equi = appContext.getBean("juventus", Equipo.class);
		
		System.out.println(equi.mostrar()); */ 
		
		/* 
		Jugador jug = appContext.getBean("messi", Jugador.class);
		
		System.out.println("Jugador: " + jug.getNombre() + "\nEquipo: " + jug.getEquipo().mostrar() + "\nNúmero: " + jug.getNumero());
		
		((ConfigurableApplicationContext) appContext).close(); 
		*/
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Elija un equipo: 1-Barcelona 2-Juventus");
		int respuesta = sc.nextInt();
		
		ApplicationContext appContext = new ClassPathXmlApplicationContext("es/spring/xml/beans.xml");
		JugadorEjercicio1 jug = appContext.getBean("jugador1" , JugadorEjercicio1.class);
		
		switch (respuesta) {
		case 1:
				jug.setEquipo(new Barcelona());
			break;
		case 2:
				jug.setEquipo(new Juventus());
			break;
		default:
			break;
		}
		
		System.out.println(jug.getNombre() + " " + jug.getEquipo().mostrar() + " " + jug.getCamiseta().getNumero() + " " + jug.getCamiseta().getMarca().getNombre());
		
		((ConfigurableApplicationContext) appContext).close();
		
		sc.close();
	}
}