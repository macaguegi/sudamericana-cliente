import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises/paises.component';
import { InsertarPaisComponent } from './insertar-pais/insertar-pais.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { InsertarCiudadComponent } from './insertar-ciudad/insertar-ciudad.component';

@NgModule({
  declarations: [PaisesComponent, InsertarPaisComponent, CiudadesComponent, InsertarCiudadComponent],
  imports: [
    CommonModule
  ]
})
export class SudamericanaModule { }
