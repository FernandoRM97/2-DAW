package es.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.spring.beans.Jugador;
import es.spring.dao.DAOJugador;

@Service
public class ServiceJugadorImpl implements ServiceJugador {

	@Autowired
	private DAOJugador daoJugador;
	
	@Override
	public void registrar(Jugador jugador) throws Exception {
		try {
			daoJugador.registrar(jugador);
		} catch (Exception e) {
			throw e;
		}
	}

}
