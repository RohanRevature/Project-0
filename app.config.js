angular.module('realestate').config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/', {
        template: '<container></container>'
      }).
      when('/Home', {
        template: '<container></container>'
      }).
        when('/Properties', {
          template: '<properties></properties>'
        }).
        when('/Login', {
          template: '<login></login>'
        }).
        when('/weather',{
            template: '<weathertab></weathertab>'
        }).
        otherwise('/error');
    }
  ]);