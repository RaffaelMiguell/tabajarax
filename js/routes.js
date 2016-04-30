angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('pRODUTO', {
    url: '/page13',
    templateUrl: 'templates/pRODUTO.html',
    controller: 'pRODUTOCtrl'
  })

  .state('menu.sERVIOS', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sERVIOS.html',
        controller: 'sERVIOSCtrl'
      }
    }
  })

  .state('menu.hOME', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hOME.html',
        controller: 'hOMECtrl'
      }
    }
  })

  .state('menu.eTEC', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eTEC.html',
        controller: 'eTECCtrl'
      }
    }
  })

  .state('menu.cONTATO', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cONTATO.html',
        controller: 'cONTATOCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page15')

  

});