package es.spring.beans;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class FernandoBeansPostProcessor implements BeanPostProcessor {

	@Override
	public Object postProcessAfterInitialization(Object bean, String nombreBean) throws BeansException {
		System.out.println("Después de la inicialización de " + nombreBean);
		return bean;
	}

	@Override
	public Object postProcessBeforeInitialization(Object bean, String nombreBean) throws BeansException {
		System.out.println("Antes de la inicialización de " + nombreBean);
		return bean;
	}

}
