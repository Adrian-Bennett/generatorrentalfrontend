import { Component } from '@angular/core';
import { Product } from '../interface/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


public onOpenModal(product: Product, mode: string): void{

  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');

  if(mode === 'add' ){
    button.setAttribute('data-target','#addProductModal');
  }

  if(mode === 'edit'){
    button.setAttribute('data-target','#updateProductModal');
  }
  if(mode === 'delete'){
    button.setAttribute('data-target','#deleteProductModal');
  }

  container?.appendChild(button)
  button.click();
}



}
