var app = angular.module("myApp",["chart.js"]);

app.controller("PieCtrl", function($scope){
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Upload Sales"];
    $scope.data = [10,10,20,30];        
});