import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //FormControl'lerin konfigürasyonunu obje olarak tanımlayıp
      // group metodu içerisine veriyoruz.İsimlere dikkat etmeliyiz.
      productName: ['', Validators.required], //["default value",Validators...]
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (response) => {//response başarılı durumda ise çalışır.(http code 200 gibi)
          this.toastrService.success(response.message, 'Başarılı !');
        },
        resposeError => {//response başarısız durumda ise çalışır.(http code 500 gibi)
          //console.log(resposeError.error.Errors);
        for (let i = 0; i < resposeError.error.Errors.length; i++) {
         //console.log(resposeError.error.Errors[i].ErrorMessage);
         this.toastrService.error(resposeError.error.Errors[i].ErrorMessage, 'Başarısız !');
        }       
        }
      );
    } else {
      this.toastrService.error(
        'Lütfen Girdiğiniz Alanları Kontrol Ediniz',
        'Başarısız !'
      );
    }
  }
}
