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
        return this.products.length;
     }

 }

 class ScalesStorageEngineLocalStorage implements IStorageEngine  {

   LocalStorageKey:string = 'product';
   

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
       let a:Array<Product>=JSON.parse(localStorage.product);
       return a.length;
   }

 }

class Product {
    name: string;
    scale: number;

    constructor (productName:string, productScale:number) {
        this.name=productName;
        this.scale=productScale;
     }

    getName ():string  {
        return this.name;
    }

    getScale ():number {
        return this.scale;
   }

} 
class Scales {
  storEngine:IStorageEngine;
  

  getSumScale():number {
      let summ:number=0;
      for (let i = 0; i < this.storEngine.getCount(); i++) {
          summ+=this.storEngine.getItem(i).getScale();
        }
     return summ  
      
  }

  getNameList ():string[] {
    let namePr: string[];
    for (let n=0; n<this.storEngine.getCount(); n++){
        namePr[n]=this.storEngine.getItem(n).getName();
    }
    return namePr;
}
    
}
let newProduct:Product= new Product("Apples", 25);
newProduct.getName();
newProduct.getScale();

let scales1:ScalesStorageEngineLocalStorage= new ScalesStorageEngineLocalStorage();
scales1.addItem(newProduct);
scales1.getItem(1);
scales1.getCount();


let scales2:ScalesStorageEngineArray= new ScalesStorageEngineArray();
scales2.addItem(newProduct);
scales2.getItem(1);
scales2.getCount();

let scalesSum:Scales= new Scales();
console.log(scalesSum.getSumScale());
console.log(scalesSum.getNameList());