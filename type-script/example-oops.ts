interface Product{
    pid:number,
    pname:string,
    pprice:number,
    sprice:number
}

//create class
class ProductAccount{

    //declare attribuates
    pid:number;
    pname:string;
    pprice:number;
    sprice:number;

    //implementation of constructor 
    constructor(pid:number, pname:string, pprice:number,sprice:number){
            this.pid = pid;
            this.pname = pname;
            this.pprice = pprice;
            this.sprice = sprice;
    }

}

//create an object
const product:Product = new ProductAccount(101,"IPhone",67000,91000);
console.log(product.pid);
console.log(product.pname);
console.log(product.pprice);
console.log(product.sprice);

