package es.spring.beans;

import es.spring.interfaces.IEquipo;

public class JugadorEjercicio1 {

	private int id;
	private String nombre;
	private IEquipo equipo;
	private CamisetaEjercicio1 camiseta;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public IEquipo getEquipo() {
		return equipo;
	}
	public void setEquipo(IEquipo equipo) {
		this.equipo = equipo;
	}
	public CamisetaEjercicio1 getCamiseta() {
		return camiseta;
	}
	public void setCamiseta(CamisetaEjercicio1 camiseta) {
		this.camiseta = camiseta;
	}
	
	
}
