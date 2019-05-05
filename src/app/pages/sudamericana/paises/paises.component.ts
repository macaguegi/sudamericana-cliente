import { Component, OnInit } from '@angular/core';
import { Pais } from '../../../models/pais.model';
import { SudamericanaService } from '../../../services/sudamericana/sudamericana.service';

@Component({
	selector: 'app-paises-list',
	templateUrl: './paises.component.html',
	styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {
	paises: Pais[];
	constructor(private sudamericanaService: SudamericanaService) { }

	ngOnInit() {
		this.getPaises();
	}

	getPaises(){
		this.paises = [];
		this.sudamericanaService.get('equipo')
		.subscribe((res:Pais[]) => {
			console.log(res);
			if(Object.keys(res[0]).length > 0){
				this.paises = res;
			}
		},(error) => {
			console.log(error);
			alert("Ocurrio un error cargando los paises");
		})
	}
}
