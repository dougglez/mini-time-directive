angular.module('timeApp').directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> The current time is <br> {{time}} </div>',
    link: function(scope, element, attrs) {
            var currentTime = new Date();
            scope.time = (currentTime.getHours() + ':' + currentTime.getMinutes()).toString();
            // scope.time = currentTime.toString();
          }
  };
});
