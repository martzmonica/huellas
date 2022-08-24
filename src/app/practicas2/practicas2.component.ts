import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicas2',
  templateUrl: './practicas2.component.html',
  styleUrls: ['./practicas2.component.css']
})
export class Practicas2Component implements OnInit {

  //DECLARACION DE VARIABLES
  texto:string
  nombre: string
  apellidos: string
  ncompleto: string
  numero1: number
  numero2: number
  suma: number
  multip: number
  alumnos: Array<string>
  alumno: string
  genero: string
  mensaje: string
  calificacion: number
  estatus: string

  constructor() { 
    //ASIGNACION DE VALORES A LAS VARIABLES
    this.texto = 'Hola mundo'
    this.nombre = 'Monica'
    this.apellidos = 'Martinez Rodriguez'
    this.ncompleto = this.nombre + " " + this.apellidos
    this.numero1 = 5
    this.numero2 = 3
    this.suma = this.numero1 + this.numero2
    this.multip = this.numero1 * this.numero2
    this.alumnos = []
  }

  ngOnInit(): void {
    
    //EJECUTAR LOS PROCESOS

    //Mostrar un texto en consola
    console.log(this.texto)

    //Mostrar un texto en alerta
    //alert(this.texto)

    //Concatenar 2 textos en consola
    console.log(this.ncompleto)

    //Concatenar 2 textos en alerta
    //alert(this.ncompleto)
  }

  agregar(){
    this.alumnos.push(this.alumno)
    console.log(this.alumnos)
  }

  seleccionar(){
    //alert(this.genero)
    if(this.genero=='Hombre'){
      this.mensaje = '¡Bienvenido al curso!'
    }
    if(this.genero=='Mujer'){
      this.mensaje = '¡Bienvenida al curso!'
    }
  }

  enviar(){
    //alert(this.calificacion)
    if(this.calificacion>=0 && this.calificacion<=30){
      this.estatus = 'Muy deficiente'
    }
    if(this.calificacion>=31 && this.calificacion<=50){
      this.estatus = 'Insuficiente'
    }
    if(this.calificacion>=51 && this.calificacion<=60){
      this.estatus = 'Suficiente'
    }
    if(this.calificacion>=61 && this.calificacion<=70){
      this.estatus = 'Bien'
    }
    if(this.calificacion>=71 && this.calificacion<=90){
      this.estatus = 'Notable'
    }
    if(this.calificacion>=91 && this.calificacion<=100){
      this.estatus = 'Sobresaliente'
    }
  }

}
