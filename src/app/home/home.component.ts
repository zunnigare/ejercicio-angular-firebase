import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  formulario: FormGroup;
  constructor (
    private dataservice: DataService
  ){
    this.formulario = new FormGroup({
      dato_ingresado: new FormControl(),
      dato_generado: new FormControl()
    })
  }

  ngOnInit(): void {}

  async onSubmit(){
    let valorIngresado = this.formulario.value;
    let color,multiplo = [];
    //Evaluamos modulos para comparar el residuo, se puede mejorar con un for
    if (valorIngresado.dato_ingresado % 7 == 0) {
      multiplo.push("7")
      color = "azul";      
    };
    if (valorIngresado.dato_ingresado % 5 == 0) {
      multiplo.push("5")
      color = "rojo";
    };
    if (valorIngresado.dato_ingresado % 3 == 0) {
      multiplo.push("3")
      color = "verde";
    };
    //seleccion de color, puedo mejorar con un select
    if (color == "verde") {
      this.colorVerde();    
    };
    if (color == "azul") {
      this.colorAzul();    
    };
    if (color == "rojo") {
      this.colorRojo();    
    };
    
    let dato_generados = (document.getElementById("dato_generado") as HTMLInputElement);
    dato_generados.value = multiplo.join(' y ');
    valorIngresado.dato_generado = multiplo.join(' y ');
    const response = await this.dataservice.addData(this.formulario.value);
    console.log(response);
  


  }
  //funciones para cambiar color
  colorVerde(){
    let dato_generado = (document.getElementById("dato_generado") as HTMLInputElement);
    dato_generado.setAttribute('class', 'form-control-lg text-success');
  }
  colorRojo(){
    let dato_generado = (document.getElementById("dato_generado") as HTMLInputElement);
    dato_generado.setAttribute('class', 'form-control-lg text-danger');
  }
  colorAzul(){
    let dato_generado = (document.getElementById("dato_generado") as HTMLInputElement);
    dato_generado.setAttribute('class', 'form-control-lg text-primary');
  }
}

