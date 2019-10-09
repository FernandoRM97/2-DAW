package es.spring.beans;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Persona implements InitializingBean, DisposableBean{

	private int id;
	private String nombre;
	private String apodo;
	private Pais pais;
	private Ciudades ciudades;
	
	/* @PostConstruct
	public void init() {
		System.out.println("Antes de inicialiar el bean");
	}
	
	@PreDestroy
	public void destroy() {
		System.out.println("Bean a punto de ser destruido");
	} */
	
	public Ciudades getCiudades() {
		return ciudades;
	}
	public void setCiudades(Ciudades ciudades) {
		this.ciudades = ciudades;
	}
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
	public String getApodo() {
		return apodo;
	}
	public void setApodo(String apodo) {
		this.apodo = apodo;
	}
	public Pais getPais() {
		return pais;
	}
	public void setPais(Pais pais) {
		this.pais = pais;
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("ANTES DE PERSONA");
		
	}
	@Override
	public void destroy() throws Exception {
		System.out.println("DESTROY PERSONA");
		
	}
	
	
}
