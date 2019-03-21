// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.home','starter.find','starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

 
  // Each tab has its own nav history stack:

  .state('home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/home/home.html',
        //controller: 'homeCtrl'
      }
    }
  })

  .state('parking', {
      url: '/parking',
      views: {
        'parking': {
          templateUrl: 'templates/parking/parking.html',
          //controller: 'ChatsCtrl'
        }
      }
    })
    .state('find', {
      url: '/find',
      views: {
        'find': {
          templateUrl: 'templates/find/find.html',
          //controller: 'ChatDetailCtrl'
        }
      }
    })
  .state('find1',{
    url:'/aaa',
    views: {
        'find': {
          templateUrl: 'templates/find/find1.html',
          //controller: 'ChatDetailCtrl'
        }
      }
  })
  .state('find2',{
    url:'/bbb',
    views: {
        'find': {
          templateUrl: 'templates/find/find2.html',
          //controller: 'ChatDetailCtrl'
        }
      }
  })
  .state('find3',{
    url:'/ccc',
    views: {
        'find': {
          templateUrl: 'templates/find/find3.html',
          //controller: 'ChatDetailCtrl'
        }
      }
  })
  .state('booked',{
    url:'/booked',
    views:{
      'parking':{
         templateUrl: 'templates/parking/booked.html',
      }
    }
  })
  .state('mine', {
    url: '/mine',
    views: {
      'mine': {
        templateUrl: 'templates/mine/mine.html',
        //controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
