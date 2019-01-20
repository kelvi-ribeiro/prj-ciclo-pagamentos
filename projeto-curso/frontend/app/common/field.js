(function(){
    angular.module('primeiraApp').component('field',{
       bindings:{
           id:'@',
           label:'@',
           grid:'@',
           placeholder:'@',
           type:'@',
           model:'=',
       },
       controller:[
           'gridSystem',
           function(gridSystem){
            const vm = this;
            this.$onInit = () => vm.gridClasses = gridSystem.toCssClasses(vm.grid);
           }
       ],
       template:`
       <div class="{{$ctrl.gridClasses}}">
            <div class="form-group">
                <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
                <input type="{{$ctrl.type}}" id="{{$ctrl.id}}" class="form-control" placeholder="{{$ctrl.placeholder}}" ng-model="$ctrl.model">
            </div>
        </div>
       ` 
    })
})()