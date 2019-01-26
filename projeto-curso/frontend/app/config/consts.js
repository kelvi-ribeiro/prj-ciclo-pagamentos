angular.module('primeiraApp').constant('consts', {
    appName: 'MEAN - Primeira Aplicação',
    version: '1.0',
    owner: 'Cod3r',
    year: new Date().getFullYear(),
    site: 'http://cod3r.com.br',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user'
  }).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
  }])