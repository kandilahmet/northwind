import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory:Category;
  constructor(private categoryServices: CategoryService) {}//Injection ile nesnesi dolduruldu. Burada da çağırdık.

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.categoryServices.getCategory().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
 

}
