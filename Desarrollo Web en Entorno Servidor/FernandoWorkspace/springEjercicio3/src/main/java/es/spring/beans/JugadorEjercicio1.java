package es.spring.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import es.spring.interfaces.IEquipo;

@Component
public class JugadorEjercicio1 {

	private int id;
	private String nombre;
	@Autowired
	@Qualifier("barcelona")
	private IEquipo equipo;
	@Autowired
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
