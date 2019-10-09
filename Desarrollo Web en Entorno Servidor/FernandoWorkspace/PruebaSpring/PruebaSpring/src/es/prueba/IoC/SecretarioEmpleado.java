package es.prueba.IoC;

public class SecretarioEmpleado implements Empleados {
	
	@Override
	public String getTareas() {
		
		return "Gestionar la agenda de los Jefes";
	}

	@Override
	public String getInforme() {
		
		return "Informe generado por el secretario " + informeNuevo.getInforme();
	}
	
	// Injección de dependencias por setters
	
	private CreacionInformes informeNuevo;

	public void setInformeNuevo(CreacionInformes informeNuevo) {
	
		this.informeNuevo = informeNuevo;
	
	}
	
	private String email;
	
	private String nombreEmpresa;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNombreEmpresa() {
		return nombreEmpresa;
	}

	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}
	
	

}
