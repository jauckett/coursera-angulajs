(function () {
'use strict';

console.log("INIT NARROW");

angular.module('NarrowItDownApp').
//service('searchService', function() {}).
controller('NarrowItDownController', ['searchService', NarrowItDownController]);

function NarrowItDownController(searchService) {

    var narrowCtl = this;

    this.searchString = "";
    this.found = [];
    this.title = "Narrowed List";
    this.error = "";
    this.narrow = function() {
        var t = searchService.getMatchedMenuItems(narrowCtl.searchString);
        t.then(function(response) {
          console.log(response);
          narrowCtl.error = "";
          narrowCtl.found = response;
        })
        .catch(function(error) {
          narrowCtl.error = error.statusText;
          console.log(error);
        });
      }

      narrowCtl.removeItem = function(index) {
        narrowCtl.found.splice(index, 1);
        console.log("REMOVE ITEM " + index);
      }
    console.log("SEARCH : " + this.searchString);

}

})();
