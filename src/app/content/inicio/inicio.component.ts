import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  imagenes = [
    '../../../assets/imagenes/imagen1.jpg', 
    '../../../assets/imagenes/imagen2.jpg', 
    '../../../assets/imagenes/imagen3.jpg'
  ];

  imagenes2 = [
    {
       imagen: '../../../assets/imagenes/imagen5.jpg',
       titulo: 'Mascota 1'
    },
    {
      imagen: '../../../assets/imagenes/imagen6.jpg',
      titulo: 'Mascota 2'
    },
    {
      imagen: '../../../assets/imagenes/imagen7.jpg',
      titulo: 'Mascota 3'
    }
  ];

  imagenes3 = [
    '../../../assets/imagenes/imagen9.jpg',
    '../../../assets/imagenes/imagen10.jpg', 
    '../../../assets/imagenes/imagen11.jfif', 
    '../../../assets/imagenes/imagen12.jpg', 
    '../../../assets/imagenes/imagen13.jpg'
  ];

  veterinarias = [
    'Veterinaria Mi Mascota',
    'Veterinaria Hinojosa', 
    'Veterinaria El Arka', 
    'Veterinaria Lomeli', 
    'Veterinaria San José'
  ];

  eventos = [
    '../../../assets/imagenes/imagen14.jpg',
    '../../../assets/imagenes/imagen15.jpg', 
    '../../../assets/imagenes/imagen16.jpg'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
