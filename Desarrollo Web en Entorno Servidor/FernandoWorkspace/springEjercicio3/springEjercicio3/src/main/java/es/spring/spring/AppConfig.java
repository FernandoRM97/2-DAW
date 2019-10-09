package es.spring.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import es.spring.beans.Barcelona;
import es.spring.beans.CamisetaEjercicio1;
import es.spring.beans.JugadorEjercicio1;
import es.spring.beans.Juventus;
import es.spring.beans.MarcaEjercicio1;

@Configuration
public class AppConfig {

	@Bean
	public JugadorEjercicio1 jugador1() {
		return new JugadorEjercicio1();
	}
	
	@Bean
	public Barcelona barcelona() {
		return new Barcelona();
	}

	@Bean
	public Juventus juventus() {
		return new Juventus();
	}
	
	@Bean
	public CamisetaEjercicio1 camiseta() {
		return new CamisetaEjercicio1();
	}
	
	@Bean
	public MarcaEjercicio1 marca() {
		return new MarcaEjercicio1();
	}
	
}
