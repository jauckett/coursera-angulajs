(function () {
'use strict';

console.log("SERVICE INIT");
angular.module('NarrowItDownApp').
service('searchService', MenuSearchService);

function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchString) {

      return $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = [];
        var menuItems = result.data.menu_items;
        console.log("LEN=" + menuItems.length);
        for (var i=0; i<menuItems.length; i++) {
            // console.log(i + " : " + menuItems[i].description);
            if (menuItems[i].description.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
                foundItems.push(menuItems[i]);
            }
        }
        // return processed items
        return foundItems;
    });
  };
}

})();
