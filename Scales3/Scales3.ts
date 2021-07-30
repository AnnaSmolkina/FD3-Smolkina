interface IStorageEngine {

    addItem(item:Product):void;
    getItem(index:number): Product;
    getCount():number;

 }
 
 class ScalesStorageEngineArray implements IStorageEngine {
    
    products:Product[]=[];

    addItem (item:Product):void {
        this.products.push(item);
    }

    getItem(index:number):Product {
        return this.products[index];
    }

    getCount():number {
        let count:number[]=[];
        for (let index = 0; index < this.products.length; index++) {
            const element:number = count[index];
            return element
        }
     }

 }

 class ScalesStorageEngineLocalStorage implements IStorageEngine  {

   LocalStorageKey:string = 'product';
   products:Product[]=[];

   addItem (item:Product):void {
       let a:Array<Product>=JSON.parse(localStorage.product);
        a.push(item);
       localStorage.product=JSON.stringify(a)
   }

   getItem (index:number):Product {
       let a:any[]=JSON.parse(localStorage.product);
       return new Product (a[index].name, a[index].scale)
   }

   getCount():number {
       let a:number[]=JSON.parse(localStorage.product);
       for (let index = 0; index < a.length; index++) {
           const element = a[index];
        return element
        }
        localStorage.product=JSON.stringify(a)
       }

 }

class Product {
    name: string;
    scale: number;

    constructor (productName:string, productScale:number) {
        this.name=productName;
        this.scale=productScale;
     }

    getName ():string {
        return this.name;
    }

    getScale ():number {
        return this.scale;
   }

} 
class Scales {
  storEngine:IStorageEngine;
  products:Product[]=[];

  getSumScale():number {
      let summ:number=0;
      for (let i = 0; i < this.storEngine.getCount(); i++) {
          summ+=this.storEngine.getItem(i).getScale();
        }
     return summ  
      
  }

  getNameList ():string[] {
    let namePr: string[]=[];
    this.products.forEach (
        (_product:Product)=> {[]=_product.getName()}
    )
    return namePr
}
    
}
let scales1:ScalesStorageEngineLocalStorage= new ScalesStorageEngineLocalStorage();
let scales2:ScalesStorageEngineArray= new ScalesStorageEngineArray();