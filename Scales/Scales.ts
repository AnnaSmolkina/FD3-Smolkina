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
    products:Array<Product>;

    constructor () {
        this.products=[];
    }

    add (_product:Product):void {
        this.products.push (_product);
    }

    getSumScale (): number {
        let summ: number=0;
        this.products.forEach (
            _product=> {summ+=_product.getScale()}
        )
        return summ;
    }

    getNameList () :string {
        let namePr: string="";
        this.products.forEach (
            _product=> {namePr+=_product.getName()}
        )
        return namePr;
    }


}

class Apples extends Product {
   
}

class Tomatos extends Product {
    
}

let redApples: Apples = new Apples ("red apples", 5);

redApples.getName();
redApples.getScale();
console.log (redApples);

let greedApples: Apples= new Apples ("green apples", 10);
let redTomatos: Tomatos=new Tomatos ("red tomatos", 8);
let yellowTomatos: Tomatos= new Tomatos ("yellow tomatos", 12);