'use strict';

window.addEventListener("load", function() {
  var app = angular.module('Binged', []);

  var html = document.querySelector('html');
  html.setAttribute('ng-app', '');
  html.setAttribute('ng-csp', '');

  var viewport = document.getElementById('viewport');
  viewport.setAttribute('ng-controller', 'MainController');
  app.controller('MainController', function ($scope) {});

  var autoCompleteWin = document.querySelector('.gssb_e');
  angular.element(autoCompleteWin).remove();

  var input = document.getElementById('lst-ib');
  input.setAttribute('ng-model', 'search');

  var myDirective = document.createElement('div');
  myDirective.setAttribute('my-directive', '');
  document.querySelector('.jsb center').appendChild(myDirective);

  app.directive('myDirective', [ '$sce', function($sce) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: $sce.trustAsResourceUrl(chrome.extension.getURL('templates/bing.html'))
    };
  }]);

  angular.bootstrap(html, ['Binged'], []);
});
