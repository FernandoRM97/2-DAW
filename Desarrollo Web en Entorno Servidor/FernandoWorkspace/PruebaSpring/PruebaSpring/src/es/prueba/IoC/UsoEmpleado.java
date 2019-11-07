package es.prueba.IoC;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoEmpleado {

	public static void main(String[] args) {

		/*
		// Creaci�n de objetos de tipo empleado
		
		Empleados Empleado1 = new DirectorEmpleado();
		
		// Uso de los objetos creados
		
		System.out.println(Empleado1.getTareas());
		*/
		
		ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		Empleados Juan = contexto.getBean("miEmpleado", Empleados.class);
		
		System.out.println(Juan.getTareas());
		
		System.out.println(Juan.getInforme()); 
		
		System.out.println("");
		
		SecretarioEmpleado Mar�a = contexto.getBean("miSecretarioEmpleado", SecretarioEmpleado.class);
		
		System.out.println(Mar�a.getTareas());
		
		System.out.println(Mar�a.getInforme());
		 
		System.out.println("Email: " + Mar�a.getEmail());
		
		System.out.println("Empresa: "+ Mar�a.getNombreEmpresa());
		
		contexto.close();
	}

}
