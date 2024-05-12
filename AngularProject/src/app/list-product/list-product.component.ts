import { Component } from '@angular/core';
import { MyService } from '../MyService';
import { IProduct } from '../../../Model/IProduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  products: IProduct[] = [];
  data!: IProduct;
  showModal: boolean = false;
  constructor(private myService: MyService) {

  }
  ngAfterContentInit(): void {
    this.myService.getProducts()
      .subscribe((data: IProduct[]) => {
        this.products = data;
      });
  }
  DeleteProduct = (product: IProduct) => {
    this.myService.deleteProduct(product);
  }
  OpenModelProduct = (product: IProduct) => {
    this.showModal = true;
    this.data = product;
    var modal = document.getElementById("myModal");
    if (modal != null) modal.style.display = "block";
    
    //this.myService.deleteProduct(product);
  }
}
