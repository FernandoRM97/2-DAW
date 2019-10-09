package es.prueba.javaannotations;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoAnnotations {

	public static void main(String[] args) {
		
		// Cargar el XML de configuración
		
		ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("applicationContext2.xml");
		
		// Pedir un bean al contenedor
		
		// Usar el bean
		
		// Cerrar el contexto

		contexto.close();
	}

}
