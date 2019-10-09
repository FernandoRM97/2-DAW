package es.prueba.javaannotations;

public class ComercialExperimentado implements Empleados {

	@Override
	public String getTarea() {
		return "Vender, vender y vender más!";
	}

	@Override
	public String getInforme() {
		return "Informe generado por el comercial";
	}

}
