import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-index-cliente',
  templateUrl: './index-cliente.component.html',
  styleUrls: ['./index-cliente.component.css']
})
export class IndexClienteComponent implements OnInit{

  public clientes : Array<any>=[];
  public filtro_apellidos = '';
  public filtro_correo = '';
  public page = 1;
  public pageSize = 1;

  constructor(
    private _clienteService : ClienteService
  ){
    
  }

  init_data(){
    this._clienteService.listar_clientes_filtro_admin(null,null).subscribe(
      response=>{
        this.clientes = response.data;
      },error=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.init_data();
  }

  filtro(tipo:any){
    if (tipo == 'apellidos') {
      if (this.filtro_apellidos) {
        this._clienteService.listar_clientes_filtro_admin(tipo,this.filtro_apellidos).subscribe(
          response=>{
            this.clientes = response.data;
          },error=>{
          }
        );
      }else{
        this.init_data();
      }
    }else if (tipo == 'correo') {
      if (this.filtro_correo) {
        this._clienteService.listar_clientes_filtro_admin(tipo,this.filtro_correo).subscribe(
          response=>{
            this.clientes = response.data;
          },error=>{
          }
        );
      }else{
        this.init_data();
      }
    } 
  }
  
}
