import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../MyService';
import { IProduct } from '../../../Model/IProduct';

@Component({
  selector: 'app-model-box-edit-product',
  templateUrl: './model-box-edit-product.component.html',
  styleUrl: './model-box-edit-product.component.css'
})
export class ModelBoxEditProductComponent {
  @Input() getProductParent: any
  constructor(private myService: MyService) {
    
  }
  editProductSubmit() {
    if (this.getProductParent != null) {
      const editProduct: IProduct = {
        name: this.getProductParent.name,
        id: this.getProductParent.id,
        createdUpdatedOn: this.getProductParent.createdUpdatedOn,
      };

      this.myService.editProduct(editProduct);
    }
    var modal = document.getElementById("myModal");
    if (modal != null) modal.style.display = "none";
  }
}
