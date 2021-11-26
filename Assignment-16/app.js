const viewModel = {
    gender:ko.observable('male')
}
viewModel.applyGender = ko.pureComputed(function(){
    return this.gender()=="male"?"male":"female"
},viewModel)

ko.applyBindings(viewModel)