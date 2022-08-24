import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent implements OnInit {

  //DECLARACION DE VARIABLES
  texto: string
  nombre: string
  apellidos: string
  nombrecomp: string
  numero1: number
  numero2: number
  suma: number
  multip: number
  alumnos: Array<string>
  alumno: string
  genero: string
  calificacion: number
  nalumno: string
  nalumnos:Array<string>

  constructor() { 
    //ASIGNACION DE VALORES A LAS VARIABLES
    this.texto = 'Hola mundo!'
    this.nombre = 'Mónica Ivette'
    this.apellidos = 'Martínez Rodríguez'
    this.numero1 = 10
    this.numero2 = 5
    this.alumnos = []
    this.nalumnos = []
  }

  //METODOS
  ngOnInit(): void {
    //Mostrar un texto en consola
    console.log(this.texto)

    //Mostrar un texto en alerta
    // alert(this.texto)

    //Concatenar 2 textos
    this.nombrecomp = this.nombre + ' ' + this.apellidos

    //Sumar 2 números
    this.suma = this.numero1 + this.numero2

    //Multiplicar 2 números
    this.multip = this.numero1 * this.numero2
  }

  agregar(){
    this.alumnos.push(this.alumno)
    console.log(this.alumnos)
  }

  enviar(){
    if(this.genero=='Mujer'){
      alert("Bienvenida al curso")
    }
    else{
      alert("Bienvenido al curso")
    }
  }

  generar(){
    if(this.calificacion >= 0 && this.calificacion <= 30){
      alert("Calificación Muy deficiente")
    }
    if(this.calificacion >= 31 && this.calificacion <= 50){
      alert("Calificación Insuficiente")
    }
  }

  introducir(){
    this.nalumnos.push(this.nalumno)
    
  }
 }