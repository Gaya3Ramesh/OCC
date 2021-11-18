function ViewModel(){
    this.todoList = ko.observableArray();
    this.title = ko.observable("");
    this.desc = ko.observable("");
    this.addTodo=function(){
        if(this.title!="" &&this.desc!=""){
            this.todoList.push({
                title:this.title,
                description:this.desc
            })
            this.title="";
            this.desc="";
        }
    }.bind(this)

}

const viewModel = new ViewModel();
ko.applyBindings(viewModel);
