---
layout: publicidad
permalink: /reservas
title: Reservas
---

<div id="formreserva">
    <fieldset class="fieldsetReserva">
        <br>
        <b>Nombre:</b>
        <input type="text" class="iReservas">
        <b>Email:</b> <input type="text" class="iReservas">
        <b>Nº Comensales:</b> 
            <select name="select" id="selectFormulario">
                <option value="value1">1</option> 
                <option value="value2">2</option>
                <option value="value3">3</option>
                <option value="value4">4</option> 
                <option value="value5">5</option>
                <option value="value6">6</option>
                <option value="value7">7</option> 
                <option value="value8">8</option>
                <option value="value9">9</option>
                <option value="value10">10</option>
            </select>
        <b>Zona:</b>   <input type="radio" name="zona" value="barra" class="radioReservas" checked>Barra
                <input type="radio" name="zona" value="salón" class="radioReservas">Salón
                <input type="radio" name="zona" value="terraza" class="radioReservas">Terraza
        <p><b>Sugerencias:</b> 
        <br>
        <textarea id="sugerencias"  rows="4" cols="50"></textarea></p>
        <p class="protecciondatos">Sobre la protección de datos: * </p>
        <p><input type="checkbox" name="acepto1" class="terminos">He leido y acepto la Política de Privacidad.</p>
        <input type="checkbox" name="acepto2" class="terminos">Deseo recibir ofertas especiales y notificaciones por e-mail y mensajes de texto.
        <br>    
    </fieldset>
<div>
<div align="center" style="padding-top: 5px">
<input type="button" id="btnreservar" value="RESERVAR">
</div>