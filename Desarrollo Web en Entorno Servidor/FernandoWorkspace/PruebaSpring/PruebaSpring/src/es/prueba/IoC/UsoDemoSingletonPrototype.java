package es.prueba.IoC;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoDemoSingletonPrototype {

	public static void main(String[] args) {

		// Carga de Xml de configuración
		
		ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("applicationContext2.xml");
		
		// Petición de Beans
		
		SecretarioEmpleado María = contexto.getBean("miSecretarioEmpleado", SecretarioEmpleado.class);
		
		SecretarioEmpleado Pedro = contexto.getBean("miSecretarioEmpleado", SecretarioEmpleado.class);
		
		System.out.println(María);
		System.out.println(Pedro);
		
		contexto.close();

	}

}
