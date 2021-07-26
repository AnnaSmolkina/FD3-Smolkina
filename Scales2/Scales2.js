class Apples {
    constructor(productName, productScale) {
        this.name = productName;
        this.scale = productScale;
    }
    getName() {
        return this.name;
    }
    getScale() {
        return this.scale;
    }
}
class Tomatos {
    constructor(productName, productScale) {
        this.name = productName;
        this.scale = productScale;
    }
    getName() {
        return this.name;
    }
    getScale() {
        return this.scale;
    }
}
class Scales {
    constructor() {
        this.products = [];
    }
    add(_product) {
        this.products.push(_product);
    }
    getSumScale() {
        let summ = 0;
        this.products.forEach(_product => { summ += _product.getScale(); });
        return summ;
    }
    getNameList() {
        let namePr;
        this.products.forEach(_product => { namePr += _product.getName(); });
        return [namePr];
    }
}
let redApples = new Apples("red apples", 5);
let greenApples = new Apples("green apples", 10);
let redTomatos = new Tomatos("red tomatos", 8);
let yellowTomatos = new Tomatos("yellow tomatos", 12);
redApples.getName();
redApples.getScale();
greenApples.getName();
greenApples.getScale();
redTomatos.getName();
redTomatos.getScale();
yellowTomatos.getName();
yellowTomatos.getScale();
let scales1 = new Scales();
scales1.add(redApples);
scales1.add(greenApples);
scales1.add(redTomatos);
scales1.add(yellowTomatos);
console.log(scales1.getSumScale());
console.log(scales1.getNameList());
//# sourceMappingURL=Scales2.js.map