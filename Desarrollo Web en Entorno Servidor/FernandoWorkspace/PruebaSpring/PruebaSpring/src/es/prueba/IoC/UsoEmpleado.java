package es.prueba.IoC;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoEmpleado {

	public static void main(String[] args) {

		/*
		// Creación de objetos de tipo empleado
		
		Empleados Empleado1 = new DirectorEmpleado();
		
		// Uso de los objetos creados
		
		System.out.println(Empleado1.getTareas());
		*/
		
		ClassPathXmlApplicationContext contexto = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		Empleados Juan = contexto.getBean("miEmpleado", Empleados.class);
		
		System.out.println(Juan.getTareas());
		
		System.out.println(Juan.getInforme()); 
		
		System.out.println("");
		
		SecretarioEmpleado María = contexto.getBean("miSecretarioEmpleado", SecretarioEmpleado.class);
		
		System.out.println(María.getTareas());
		
		System.out.println(María.getInforme());
		 
		System.out.println("Email: " + María.getEmail());
		
		System.out.println("Empresa: "+ María.getNombreEmpresa());
		
		contexto.close();
	}

}
