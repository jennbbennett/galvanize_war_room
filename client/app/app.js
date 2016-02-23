angular.module('warRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    console.log('Hello from Angular');
  });


  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
    url: '/home'
  });
