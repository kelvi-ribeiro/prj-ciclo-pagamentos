(function () {

    angular.module('primeiraApp').controller('CommonsCtrl', [            
        'consts',
        CommonsController
    ])

    function CommonsController(consts) {        
        const vm = this;
        vm.getYear = () => consts.year        

    }

})()