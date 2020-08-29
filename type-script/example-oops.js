//create class
var ProductAccount = /** @class */ (function () {
    //implementation of constructor 
    function ProductAccount(pid, pname, pprice, sprice) {
        this.pid = pid;
        this.pname = pname;
        this.pprice = pprice;
        this.sprice = sprice;
    }
    return ProductAccount;
}());
//create an object
var product = new ProductAccount(101, "IPhone", 67000, 91000);
console.log(product.pid);
console.log(product.pname);
console.log(product.pprice);
console.log(product.sprice);
