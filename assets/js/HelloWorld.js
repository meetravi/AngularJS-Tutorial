/**
 * Created by ravishankarradhakrishnan on 19/07/2014.
 */

(function(){

    var app = angular.module("HelloWorld",[]);
    app.controller("CallHelloWorld",function($scope){
        this.text="Angular from the Awesome Controller !!!";
        $scope.folks = [{
            name:"Ravi",
            hobby:"Photography, Travel",
            profession:"JS Consultant",
            availableForContract:true,
            rate: 400
        },{
            name:"Krithi",
            hobby:"Sewing, Cooking",
            profession:"Secretary",
            availableForContract:false,
            rate: 350
        },{
            name:"Manoj",
            hobby:"Cricket",
            profession:"Tableau Analyst",
            availableForContract:true,
            rate: 300
        }]
    });


})();
