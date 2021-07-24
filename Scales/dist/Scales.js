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
    Scales.prototype.add = function (product) {
        return product;
    };
    Scales.prototype.getSumScale = function () {
        return sum;
        productScale;
    };
    Scales.prototype.getNameList = function () {
        return productName;
    };
    return Scales;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_productName, _productScale) {
        var _this = _super.call(this) || this;
        _this.name = "Apple";
        _this.scale = 5;
        _this.name = _productName;
        _this.scale = _productScale;
        return _this;
    }
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
        console.log(this.getName);
    };
    return Apple;
}(Product));

//# sourceMappingURL=Scales.js.map
