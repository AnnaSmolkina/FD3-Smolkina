var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(productName, productScale) {
        this.name = productName;
        this.scale = productScale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (_product) {
        this.products.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var summ = 0;
        this.products.forEach(function (_product) { summ += _product.getScale(); });
    };
    Scales.prototype.getNameList = function () {
        var namePr = "";
        this.products.forEach(function (_product) { namePr += _product.getNameList(); });
    };
    return Scales;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
var Tomatos = /** @class */ (function (_super) {
    __extends(Tomatos, _super);
    function Tomatos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomatos;
}(Product));

//# sourceMappingURL=Scales.js.map
