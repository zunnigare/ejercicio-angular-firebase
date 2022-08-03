import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
//import { collection } from '@firebase/firestore';
import  Data  from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore) { }

  addData(data:Data){
    const dataRef = collection(this.firestore, 'data');
    return addDoc(dataRef, data);
  }

}
