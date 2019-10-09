package es.spring.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import es.spring.interfaces.Equipo;

@Component("messi")
public class Jugador {
	
	@Value("10")
	private int numero;
	@Value("messi")
	private String nombre;
	@Autowired
	//@Qualifier("barcelonaQualifier")
	private Equipo equipo;
	
	public int getNumero() {
		
		return numero;
	}
	
	public void setNumero(int numero) {
		this.numero = numero;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public Equipo getEquipo() {
		return equipo;
	}
	
	public void setEquipo(Equipo equipo) {
		this.equipo = equipo;
	}
	
}
