
export class ProductModel{

    pid:number
    pname:string
    price:number
    sprice:number
    isdeleted:boolean

    constructor(){        
    }

    addProduct(pid,pnane,pprice,sprice){
        this.pid = pid;
        this.pname =pnane;
        this.price = pprice;
        this.sprice = sprice;
        this.isdeleted = false;
    }    
    toggle(){
        this.isdeleted = !this.isdeleted;
    }
    getProduct(){
            return {pid:this.pid,pname:this.pname,price:this.price,sprice:this.sprice,isdeleted:this.isdeleted}
    }

}