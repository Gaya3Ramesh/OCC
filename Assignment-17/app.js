function ProductList(){
    this.pname = ko.observable("");
    this.pprice = ko.observable("");
    this.products = ko.observableArray([
        
    ]) 
    this.addProduct = function(){
        if(this.pname()!=""&& this.pprice()!=""){
            this.products.push({
                name:this.pname(),
                price:this.pprice()
            })
            this.pname("");
            this.pprice("");
        }
    }

}

const productList = new ProductList();
ko.applyBindings(productList)