(function () {
'use strict';

console.log("INIT NARROW");

angular.module('NarrowItDownApp', []).
controller('NarrowItDownController', NarrowItDownController);

function NarrowItDownController($http) {

    var narrowCtl = this;

    console.log($http);
    narrowCtl.searchString = "TEST ";
    narrowCtl.narrow = function() {
      console.log("NARROW IT");

      // Simple GET request example:
      $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function successCallback(response) {
          console.log(response);
        }, function errorCallback(response) {
          console.log(response);
        });
    }

}

})();
