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
            _product=> {summ+ = _product.getScale()}
        )
    }

    getNameList () :string {
        let namePr: string="";
        this.products.forEach (
            _product=> {namePr+=_product.getNameList()}
        )
    }


}

class Apple extends Product {
   
}

class Tomatos extends Product {
    
}