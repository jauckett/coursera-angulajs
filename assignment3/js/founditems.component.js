
 // Create `founditems.component.js` and declare `foundItems` component in it.
 // The list should be displayed using this `component` which takes the `found` array of items specified
 // on it as an attribute (think one-way binding with '<'). The component should also provide an on-remove
 // attribute that will use function reference binding to invoke the parent controller removal
 // an item from the `found` array based on an index into the `found` array. The index should be passed in
 // from the component to the controller. (Note that we implemented almost identical
 // type of behavior in the Lecture 33 Part 2, so as long as you understood that code,
 // it should be very close to copy/paste). In the NarrowItDownController,
 // simply remove that item from the `found` array.
 // You can do that using the [Array's splice()
 // method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
 // For example, to remove an item with the index of 3 from the `found` array, you would call `found.splice(3, 1);`.


 (function () {
 'use strict';

  angular.module('NarrowItDownApp')

  .component('foundItems', {
    templateUrl: 'foundList.html',
    controller: foundItemsComponentController,
    bindings: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    }
  });

foundItemsComponentController.$inject = ['$element'];
function foundItemsComponentController($element) {
    var $ctrl = this;
    var totalItems;

    console.log("Found ITEMS component");

    $ctrl.remove = function (myIndex) {
      console.log("Remove : " + myIndex);
      $ctrl.onRemove({ index: myIndex });
    };

    $ctrl.$onInit = function () {
      totalItems = 0;
    };

    $ctrl.$onChanges = function (changeObj) {
      console.log("Changes: ", changeObj);
    }
}

 })();
