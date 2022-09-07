import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  nombreLower:string='Pipes';
  nombreUpper:string='ANGULAR';
  nombreCompleto:string='yUVIsa QuisPE'
  constructor() { }

  ngOnInit(): void {
  }

}
