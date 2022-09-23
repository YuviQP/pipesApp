import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  nombreLower:string='Pipes';
  nombreUpper:string='ANGULAR';
  nombreCompleto:string='yUVIsa QuisPE';
  otraFecha:string='2015-03-21T00:00:00.000';
  constructor() { }

  ngOnInit(): void {
  }
  fecha:Date=new Date();
}
