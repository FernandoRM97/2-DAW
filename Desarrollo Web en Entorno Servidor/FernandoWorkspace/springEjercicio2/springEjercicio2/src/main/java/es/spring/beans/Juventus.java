package es.spring.beans;

import org.springframework.stereotype.Component;

import es.spring.interfaces.IEquipo;

@Component
public class Juventus implements IEquipo {

	@Override
	public String mostrar() {
		return "Juventus";
	}

}
