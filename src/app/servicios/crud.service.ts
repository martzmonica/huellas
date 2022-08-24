import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage'; 
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url: any
  registros:any
  razas: any

  registros2:any
  
  constructor( private database: AngularFirestore, private storage: AngularFireStorage) { }

  create(coleccion, form){
    let promesa = new Promise((resolve, reject)=>{
      this.database.collection(coleccion).add(form).then((response)=>{
        let id= response.id;
        resolve(id)
        this.database.collection(coleccion).doc(id).update({ 
          url:this.url,
          id:id
        })
      }).catch((err)=>{ reject(false) })
    })
    return promesa;
  }

  create2(coleccion2, form2){
    let promesa = new Promise((resolve, reject)=>{
      this.database.collection(coleccion2).add(form2).then((response)=>{
        let id= response.id;
        resolve(id)
      }).catch((err)=>{ reject(false) })
    })
    return promesa;
  }

  upload(coleccion, event){
    let promesa = new Promise( (resolve, reject)=>{
      for(let i = 0; i < event.target.files.length; i++){
        const file = event.target.files[i]; 
        const filePath = coleccion+'/'+Math.random();
        const fileRef = this.storage.ref(filePath)  
        const task = this.storage.upload(filePath, file)
        task.snapshotChanges()
        .pipe(
          finalize(() => {
            const downloadURL = fileRef.getDownloadURL();
            downloadURL.subscribe(url => {
              resolve(url)
              this.url = url    
              console.log(this.url)
            });
          }),
        )
        .subscribe();
      }
    });
  }  

  read(coleccion){
    var promise = new Promise((resolve) => {
      this.registros=[];
      this.registros=this.database.collection(coleccion).valueChanges().subscribe(response=>{
        resolve(response)
      }); 
    })
    return promise
  }

  update(coleccion, registro){
    let promesa = new Promise( (resolve, reject)=>{
      this.database.collection(coleccion).doc(registro.id).set(registro).then(resp=>{
        resolve(true)
        if(this.url){
          this.database.collection(coleccion).doc(registro.id).update({ 
            url:this.url
          })
        }
      }).catch((err)=>{ 
        reject(false) 
      })
    })
    return promesa;
  }

  delete(coleccion, registro){
    let promesa = new Promise( (resolve, reject)=>{
      this.database.collection(coleccion).doc(registro.id).delete().then((response)=>{ 
        resolve(true)
        if(true){
          this.storage.storage.refFromURL(registro.url).delete();      
        }
      }).catch((err)=>{ 
        reject(false) 
      })
    })
    return promesa;
  }

  order(coleccion,orden){
    let promesa = new Promise((resolve, reject) => {
      this.registros=[];
      this.registros=this.database.collection(coleccion,ref => ref.orderBy(orden,'asc')).valueChanges().subscribe(response=>{
        resolve(response)
      }); 
    })
    return promesa
  }

  filter(coleccion, campo, filtro){
    let promesa = new Promise((resolve) => {
      this.registros=[];
      this.registros=this.database.collection(coleccion,ref => ref.where(campo,"==",filtro)).valueChanges().subscribe(response=>{
        resolve(response)
      }); 
    })
    return promesa
  }
}

