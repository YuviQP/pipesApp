import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre:string='Maria';
  genero:string='Femenino';
 //i18nSelect
  invitacionMapa={
    'masculino':'invitarlo',
    'femenio ':'invitarla'
  }
  //i18nPlural
  clientes:string []=['Maria','Juan','Beto','Fernando']
  clientesMapa={
    '=0':'no tenemos ningun cliente',
    '=1':'tenemos 1 cliente',
    '=2':'tenemos 2 cliente',
    '=3':'tenemos 3 cliente',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
  let num= Math.floor(Math.random() * this.clientes.length);
  this.genero='masculino';
  this.nombre=this.clientes[num];
  }

  eliminarCliente(){
  this.clientes.pop();
  }

}
