var  gerson =  angular.module ("gerson",[]);
  gerson.controller("Suma",function($scope){
    $scope.cantidad1 = 2;
    $scope.cantidad2 = 1;
    $scope.Suma = function(cantidad){
      $scope.cantidad1 + $scope.cantidad2
    };
  })
  gerson.controller("Miltiplicacion",function($scope){
    $scope.cantidad1 = 2;
    $scope.cantidad2 = 1;
    $scope.Miltiplicacion = function(cantidad){
      $scope.cantidad1 * $scope.cantidad2
  })
