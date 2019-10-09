package es.prueba.IoC;

public class JefeEmpleado implements Empleados {
	
	public JefeEmpleado(CreacionInformes informeNuevo) {
		this.informeNuevo = informeNuevo;
	}

	private CreacionInformes informeNuevo;

	public String getTareas() {
		return "Gestiono las tareas de los empleados";
	}

	@Override
	public String getInforme() {
		
		return "Informe presentado por el jefe con arreglos: " + informeNuevo.getInforme();
	}
}
