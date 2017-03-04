var IMG_PATH = "/src/img/";

var app = angular.module('mminingApp', ["ngRoute", "ui.router"]);

app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: '/view/carousel.html'
            },
            'contents': {
                templateUrl: '/view/contents.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })

    .state('video', {
        url: '/video/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: ''
            },
            'contents': {
                templateUrl: '/view/video.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })

    .state('program', {
        url: '/program/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: '/view/carousel.html'
            },
            'contents': {
                templateUrl: '/view/program.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })

    .state('tv', {
        url: '/tv/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: '/view/carousel.html'
            },
            'contents': {
                templateUrl: '/view/tv.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })

    .state('song', {
        url: '/song/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: '/view/carousel.html'
            },
            'contents': {
                templateUrl: '/view/song.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })

    .state('item', {
        url: '/item/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: ''
            },
            'contents': {
                templateUrl: '/view/item.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })

    .state('search', {
        url: '/search/',
        views: {
            'nav': {
                templateUrl: '/view/nav.html'
            },
            'carousel': {
                templateUrl: ''
            },
            'contents': {
                templateUrl: '/view/result.html',
                controller: function($scope){
                }
            },
            'footer': {
                templateUrl: '/view/footer.html'
            },
        }
    })
    ;
}]);

app.service('searchService', function() {
    var searchText = "";
    this.getSearchText = function () {
        return searchText;
    };
    this.setSearchText = function (text) {
        searchText = text;
    };
    this.searchAction = function () {
    };
});

app.factory('searchFactory', function() {
    var searchText = "";
    return {
      getSearchText : function () {
          return searchText;
      },

      setSearchText : function (text) {
          searchText = text;
      }
    }
});

app.controller('contentsCtrl', ['$scope', function ($scope) {
  $scope.totalPrograms = [
    {name:"1", img:IMG_PATH+"photo.jpg", title:"무한도전 무엇을얘기해볼까", href:"#/program/"},
    {name:"2", img:IMG_PATH+"photo2.jpg", title:"무한도전", href:"#/program/"},
    {name:"3", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"4", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"5", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"6", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"7", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"8", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"9", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"10", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"11", img:IMG_PATH+"photo.jpg", title:"d1", href:"#/program/"},
    {name:"12", img:IMG_PATH+"photo2.jpg", title:"d2", href:"#/program/"},
    {name:"13", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"14", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"15", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"16", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"17", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"18", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
    {name:"19", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/program/"},
    {name:"20", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/program/"},
  ]

  $scope.popularPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

  $scope.recentPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

  $scope.recommendPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

}]);

app.controller('programCtrl', ['$scope', function ($scope) {
    $scope.episodesPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"#/video/", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"#/video/", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

  $scope.itemInThisPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]
}]);


app.controller('tvCtrl', ['$scope', function ($scope) {
    $scope.popularPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

  $scope.recentPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

  $scope.recommendPrograms = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

}]);

app.controller('songCtrl', ['$scope', function ($scope) {
  $scope.totalPrograms = [
    {name:"1", img:IMG_PATH+"photo.jpg", title:"무한도전 무엇을얘기해볼까", href:"#/video/"},
    {name:"2", img:IMG_PATH+"photo2.jpg", title:"무한도전", href:"#/video/"},
    {name:"3", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"4", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"5", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"6", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"7", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"8", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"9", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"10", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"11", img:IMG_PATH+"photo.jpg", title:"d1", href:"#/video/"},
    {name:"12", img:IMG_PATH+"photo2.jpg", title:"d2", href:"#/video/"},
    {name:"13", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"14", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"15", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"16", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"17", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"18", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
    {name:"19", img:IMG_PATH+"photo3.jpg", title:"d2", href:"#/video/"},
    {name:"20", img:IMG_PATH+"photo.jpg", title:"d2", href:"#/video/"},
  ]
}]);

app.controller('videoInfoCtrl', ['$scope', function ($scope) {
  $scope.episodes = [
    {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"7", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"8", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"9", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"10", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"11", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"12", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"13", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"14", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"15", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"16", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"17", img:IMG_PATH+"r2.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"18", img:IMG_PATH+"r1.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"19", img:IMG_PATH+"r1.png", title:"d3", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    {name:"20", img:IMG_PATH+"r4.png", title:"ㅁㄴㅇㄹ", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
  ]

  $scope.relatedProducts = [
    {name:"1", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 ", href:"#/item/", overlay:"", meta:"MSI | Product | $251"},
    {name:"2", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"#/item/", overlay:"", meta:"MSI | Product | $251"},
    {name:"3", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"4", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"5", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"6", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"7", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"8", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"9", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"10", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"11", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"12", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"13", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"14", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"15", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"16", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"17", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"18", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"19", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"20", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},

  ]

}]);

app.controller('itemCtrl', ['$scope', function ($scope) {
    $scope.slider = [
      {name:"1", img:"photo.jpg"},
      {name:"2", img:"pororo.jpg"},
      {name:"3", img:"pororo.jpg"},
      {name:"4", img:"pororo.jpg"},
    ]

    $scope.productTitle = "LOWA Men’s Renegade GTX";
    $scope.productDesc = "출산/육아 &gt; 완구/매트 &gt; 언어/학습완구 &gt; 스티커북";
    $scope.productPrice = "$30";

    $scope.relatedProducts = [
    {name:"1", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"2", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"3", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"4", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"5", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"6", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"7", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"8", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"9", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"10", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"11", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"12", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"13", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"14", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"15", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"16", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"17", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"18", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"19", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    {name:"20", img:"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
  ]
}]);

app.controller('navCtrl', function ($scope, searchFactory) {
  $scope.searchText = "";
  $scope.searchClick = function(){
    searchFactory.setSearchText($scope.searchText);
    location.href = "#/search/";
  };
});

app.controller('searchCtrl', function ($scope, searchFactory) {
    $scope.searchText = searchFactory.getSearchText();

    $scope.resultProgram = [
      {name:"1", img:IMG_PATH+"r1.png", title:"미씽나인", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
      {name:"2", img:IMG_PATH+"r2.png", title:"인거같다", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
      {name:"3", img:IMG_PATH+"r3.png", title:"d1", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
      {name:"4", img:IMG_PATH+"r4.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
      {name:"5", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
      {name:"6", img:IMG_PATH+"r3.png", title:"d2", href:"", overlay:"", meta:">MBC | 44min | 2017년 1월 28일"},
    ]

    $scope.resultItem = [
      {name:"1", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
      {name:"2", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
      {name:"3", img:IMG_PATH+"product1.jpg", title:"MSI 지포스 GTX1060 게이밍 X D5 6GB 트윈프로져6", href:"", overlay:"", meta:"MSI | Product | $251"},
    ]
});



/*
app.filter('evenFilter', function() {
    return function(items) {
        list = new Array();
        $.each(items, function(index, value){
          if( index%2 == 0 )
            list.push(value);
        });
        return list;
    };
});
app.filter('oddFilter', function() {
    return function(items) {
        list = new Array();
        $.each(items, function(index, value){
          if( index%2 == 1 )
            list.push(value);
        });
        return list;
    };
});
*/
