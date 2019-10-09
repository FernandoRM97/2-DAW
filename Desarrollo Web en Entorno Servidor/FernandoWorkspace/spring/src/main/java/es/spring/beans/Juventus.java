package es.spring.beans;

import es.spring.interfaces.IEquipo;

public class Juventus implements IEquipo {

	@Override
	public String mostrar() {
		return "Juventus";
	}

}
