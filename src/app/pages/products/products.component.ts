import { Component, OnInit } from '@angular/core';
import { MODEL } from 'src/app/app/api.model';
import { ApiService } from 'src/app/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  apiData: MODEL = {} as MODEL;
  constructor(private _httpService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  //GET DATA API
  getData(){
    this._httpService.getApi().subscribe({
      next: (data =>{
        this.apiData = data;
      }),
      error(err) {
        console.error('ERROR RETRIEVING DATA')
      },
      complete() {
        console.log('DONE')
      },
    })
  }

}
