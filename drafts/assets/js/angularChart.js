var app = angular.module("myApp",["chart.js"]);

app.controller("PieCtrl", function($scope){
    $scope.labels = ["Download Sales", "In-Store Sales", "Upload Sales"];
    $scope.data = [30,40,30];   
    $scope.colors = ["#5DA5DA","#FAA43A","#F15854"];
    $scope.options = {
        responsive: false,
        maintainAspectRatio: false
    }    
});