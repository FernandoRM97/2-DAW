package reto1;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner s = new Scanner(System.in);
		
		String palabra = s.nextLine();
		
		System.out.println(duplicar(palabra));
		
		s.close();
		
	}
	
	public static String duplicar(String palabra) {
		
		String abecedario = "abcdefghijklmnñopqrstuvwxyz";
		
		String palabraDuplicada = "";
		
		int contador = 0;
		
		for(int i = 0; i <palabra.length(); i++) {
			char letraActual = palabra.charAt(i);
			char letraActualMasUno = palabra.charAt(i++);
			
			int posi = abecedario.indexOf(letraActual);
			int posi2 = abecedario.indexOf(letraActualMasUno);
			
			for(int j = posi; j < posi2; j++) {
				contador++;
			}
			
			for(int k=0; k < contador; k++) {
				palabraDuplicada = palabraDuplicada + letraActual;
			}
			
			contador = 0;
			
		}
		
		return palabraDuplicada;
		
	}

}
