class ScalesStorageEngineArray {
    constructor() {
        this.products = [];
    }
    addItem(item) {
        this.products.push(item);
    }
    getItem(index) {
        return this.products[index];
    }
    getCount() {
        let count = [];
        for (let index = 0; index < this.products.length; index++) {
            const element = count[index];
            return element;
        }
    }
}
class ScalesStorageEngineLocalStorage {
    constructor() {
        this.LocalStorageKey = 'product';
        this.products = [];
    }
    addItem(item) {
        let a = JSON.parse(localStorage.product);
        a.push(item);
        localStorage.product = JSON.stringify(a);
    }
    getItem(index) {
        let a = JSON.parse(localStorage.product);
        return new Product(a[index].name, a[index].scale);
    }
    getCount() {
        let a = JSON.parse(localStorage.product);
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            return element;
        }
        localStorage.product = JSON.stringify(a);
    }
}
class Product {
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
    getSumScale() {
        let summ = 0;
        for (let i = 0; i < this.storEngine.getCount(); i++) {
            summ += this.storEngine.getItem(i).getScale();
        }
        return summ;
    }
    getNameList() {
        let namePr = [];
        this.products.forEach((_product) => { [] = _product.getName(); });
        return namePr;
    }
}
let scales1 = new ScalesStorageEngineLocalStorage();
let scales2 = new ScalesStorageEngineArray();
//# sourceMappingURL=Scales3.js.map