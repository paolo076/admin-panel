var app = angular.module("myApp",["chart.js"]);

app.controller("PieCtrl", function($scope){
    $scope.pie_labels = ["Download Sales", "In-Store Sales", "Upload Sales"];
    $scope.pie_data = [30, 40, 30];   
    $scope.pie_colors = ["#5DA5DA", "#FAA43A", "#F15854"];
    $scope.pie_options = {
        responsive: true,
        maintainAspectRatio: true
    }    
});

app.controller("LineCtrl", function($scope){
    $scope.line_labels = ["2013", "2014", "2015", "2016", "2017"];
    $scope.line_data = [
        [65, 59, 80, 81, 56]
    ];
    $scope.line_onClick = function(points, evt){
        console.log(points, evt);
    };
    $scope.datasetOverride = [{yAxisID: 'y-axis-1'}];
    $scope.line_options = {
        backgroundColor: transparent,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [
                {
                    id: "y-axis-1", 
                    type: "linear",
                    display: true,
                    position: "left",
                    ticks: {min: 0, max:100}
                }
            ]
        }
    }
    $scope.line_colors = [{
                  backgroundColor: 'transparent',
                  borderColor: '#F78511',
                },];  
});

app.controller("tListCtrl", function($scope){
    $scope.tList_records = [
        {
            report_name: "Bob Marley",
        },
        {
            report_name: "Bill Gates",
        },
        {
            report_name: "Steve Jobs",
        }
    ];

    console.log(angular.toJson($scope.tList_records));
});