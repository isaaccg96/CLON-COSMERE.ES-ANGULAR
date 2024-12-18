import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.scss']
})
export class FichaProductoComponent implements OnInit {
  producto: any | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http.get<any[]>('../assets/JSON/gridData.json').subscribe((data) => {
        this.producto = data.find((item) => item.id === +id);

        if (!this.producto) {
          console.error('Producto no encontrado');
        }
      });
    } else {
      console.error('ID no encontrado en la URL');
    }
  }
}
