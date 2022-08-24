import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';

@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.component.html',
  styleUrls: ['./adoptame.component.css']
})

export class AdoptameComponent implements OnInit {

  /*DECLARACION DE VARIABLES*/
  form = {
    nombre: "",
    descripcion: "",
    raza: ""
  }
  coleccion: string
  registros: any
  proceso_agregar: boolean
  proceso_editar:boolean
  url: string
  orden: string
  filtro: string
  campo: string

  form2 = {
    nalumno: "",
    ncalificacion: ""
  }
  nalumno: string
  coleccion2: string
  registros2: any
  total: number

  /*imagenes = [
    {
       imagen: '../../../assets/imagenes/imagen4.jpg',
       titulo: 'Doggie',
       descripcion: 'Cachorrita de 4 meses de edad, esterilizada y desparásitada. Busca una familia que la ame toda la vida.'
    },
    {
      imagen: '../../../assets/imagenes/imagen5.jpg',
      titulo: 'Terry',
      descripcion: 'Inteligente, Fiestero, Juguetón, Territorial, Dinámico, Faldero, Cariñoso, Tierno.'
    },
    {
      imagen: '../../../assets/imagenes/imagen6.jpg',
      titulo: 'Yako',
      descripcion: 'Muy cariñoso, juguetón y sociable, 1 año de edad.'
    }
    ,
    {
      imagen: '../../../assets/imagenes/imagen7.jpg',
      titulo: 'Toby',
      descripcion: 'Encantador, muy juguetón como bebé que es.'
    }
    ,
    {
      imagen: '../../../assets/imagenes/imagen8.jpg',
      titulo: 'Cheis',
      descripcion: 'Juguetón, sociable, cariñoso y muy noble. 4 meses'
    }
  ];*/

  /*CONSTRUCTOR*/
  constructor( private crud: CrudService ) { }

  /*METODOS*/
  ngOnInit(): void {
    this.coleccion = 'adopciones'
    this.coleccion2 = 'alumnos'
    this.crud.read(this.coleccion).then((response:any)=>{
      this.registros = response;
      console.log(this.registros)
    });
    this.crud.read(this.coleccion2).then((response:any)=>{
      this.registros2 = response;
      this.total = response.length
      console.log(this.registros2)
    });
  }

  publicar(){
    this.crud.create(this.coleccion,this.form).then((response:any)=>{
      if(response){
        alert('¡Se publicó correctamente!')
      }
      else{
        alert('Hubo un error')
      }
      console.log(response)
      location.reload()
    })
  }

  almacenar(event) { 
    this.crud.upload(this.coleccion, event)
  }

  agregar(){
    this.proceso_agregar = true
    this.proceso_editar = false
    this.form = { 
      nombre:'',
      descripcion:'',
      raza:''
    }
    this.url = ""
  }

  editar(registro){
    this.proceso_agregar = false
    this.proceso_editar = true
    this.form = registro;
    this.url = registro.url 
  }

  actualizar(){
    this.crud.update(this.coleccion, this.form).then((response:any)=>{
      alert(response)
      if(response){
        alert('¡Se actualizó correctamente!')
      }
      else{
        alert('Hubo un error')
      }
      console.log(response)
      location.reload()
    })
  }

  eliminar(registro){
    if (confirm('¿Desea eliminar este registro?')) {
      this.crud.delete(this.coleccion,registro).then((response:any)=>{
        if(response){
          alert('¡Se eliminó correctamente!')
        }
        else{
          alert('Hubo un error')
        }
        console.log(response)
        location.reload()
      })
    }
  }

  ordenar() {
    this.crud.order(this.coleccion,this.orden).then((response:any)=>{
      this.registros = response
      console.log(this.registros)
    })
  }

  filtrar(){
    this.campo="raza"
    this.crud.filter(this.coleccion, this.campo, this.filtro).then((response:any)=>{
      this.registros = response
      console.log(this.registros)
    })
  }

  introducir(){
    this.orden="nalumno"
    this.crud.create2(this.coleccion2,this.form2).then((response:any)=>{
      this.crud.order(this.coleccion2,this.orden).then((response:any)=>{
        this.registros2 = response
        this.total = response.length
      })
    })
  }
}