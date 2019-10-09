package es.spring.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CamisetaEjercicio1 {

	@Value("1")
	private int id;
	@Value("10")
	private int numero;
	@Autowired
	private MarcaEjercicio1 marca;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public MarcaEjercicio1 getMarca() {
		return marca;
	}
	public void setMarca(MarcaEjercicio1 marca) {
		this.marca = marca;
	}
	
	
}
