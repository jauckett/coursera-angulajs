(function functionName() {
'use strict';

angular.module('LunchChecker', [])
    .controller('LunchController', function($scope) {

        $scope.lunch = "";
        $scope.lunchMessage = "";
        $scope.lunchMessageClass = "";

        $scope.checkLunch = function functionName() {
          var lunchTrimmed = $scope.lunch.trim();
          if (lunchTrimmed.length == 0) {
            $scope.lunchMessage = "Enter your lunch list please!";
            $scope.lunchMessageClass = "lunchwarning";
            return;
          }
          var courses = lunchTrimmed.split(',');
          console.log("Lunch Courses : " + courses + " Len=" + courses.length);
          if (courses.length <= 3) {
            $scope.lunchMessage = "Enjoy!";
            $scope.lunchMessageClass = "lunchenjoy";
          }
          if (courses.length > 3) {
            $scope.lunchMessage = "Too Much!";
            $scope.lunchMessageClass = "lunchtoomuch";
          }
        }
    });
})();
