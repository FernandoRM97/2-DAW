package es.prueba.IoC;

public class DirectorEmpleado implements Empleados {

	// Creaci�n de campo tipo Creaci�nInforme (interfaz)
	
	private CreacionInformes informeNuevo; 
	
	// Creaci�n de constructor que inyecta la dependencia
	
	public DirectorEmpleado(CreacionInformes informeNuevo) {
		this.informeNuevo = informeNuevo;
	}
	@Override
	public String getTareas() {
		return "Gestionar la plantilla de la empresa";
	}

	@Override
	public String getInforme() {

		return "Informe creado por el Director: " + informeNuevo.getInforme(); 
	}

	// M�todo init. Ejecutar tareas antes de que el bean est� disponible
	
	public void metodoInicial(){
		System.out.println("Dentro del m�todo init. Aqu� ir�an las tareas antes de ejecutar el bean este listo");
	}
	
	// M�todo destroy. Ejecutar tareas despu�s de que el bean hay sido destruido
	
	public void metodoFinal() {
		System.out.println("Dentro del m�todo destroy. Aqu� ir�an las tareas despu�s de utilizar el bean");
	}
}
