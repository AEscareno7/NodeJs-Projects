import { Component } from '@angular/core';
import { CalculosService } from './calculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyAngularNode';

  lado: number =0;
 area: number =0;
 perimetro: number =0;

 constructor(private calculos: CalculosService){}

 enviar(): void {
  console.log(this.lado);
  const urapi = `http://localhost:3000/calculos/${this.lado}`;
  this.calculos.getJSON(urapi).subscribe((res: any) => {
  console.log(res);
  // Una sintaxis alternativa al punto es la siguiente
  this.area = res['area'];
  this.perimetro = res['perimetro'];
  });
  }
 
}
