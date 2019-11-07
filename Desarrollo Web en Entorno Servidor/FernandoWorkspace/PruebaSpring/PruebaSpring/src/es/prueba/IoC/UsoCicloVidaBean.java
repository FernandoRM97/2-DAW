package es.prueba.IoC;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoCicloVidaBean {

	public static void main(String[] args) {

		// Cargar el XML de configuraci�n
		
		ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("applicationContext3.xml");
		
		// Obtenci�n del bean
		
		Empleados Fernando=contexto.getBean("miEmpleado", DirectorEmpleado.class);
		
		System.out.println(Fernando.getInforme());
		
		// Cerrar contexto
		
		contexto.close();
		
	}

}
