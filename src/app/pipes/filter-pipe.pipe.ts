import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    
    //filtre kısmına birşey yazılmışsa bütün yazılanları küçük harfe çevir 
    //eğer boş ise birşey atama.
    filterText=filterText?filterText.toLocaleLowerCase():""

    //filterText boş değilse value (Product dizisi) içerisindekileri (Product)  tek tek gez
    //Product'ın ProductName içerisinde filterText geçiyorsa geçenleri bir Product dizisi olarak geri dön.
    return filterText?value.filter((currentProductValue:Product)=>
     //indexOf aranan kelimenin kaçıncı karakterden itibaren başladığını gösterir. -1 olursa hiç geçmiyor demek      
     currentProductValue.productName.toLocaleLowerCase().indexOf(filterText)!==-1 ):value;
  }

}
