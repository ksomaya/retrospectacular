
'use strict';

angular.module('retrospectApp')
    .controller('Ctrl', [
        'retrospectives'
    ])
    .directive('fuiEditable', function () {
        return {
            templateUrl: 'views/directives/fuiEditable.html',
            restrict: 'EA',
            replace: true,
            scope: {
                item: '=',
                onDelete: '&',
                onUpdate: '&'
            },
            transclude: true,
            link: function postLink(scope, element, attrs) {
                scope.toggleEditmode = function() {
                    scope.showEdit = !scope.showEdit;
                };

                scope.saveChange = function () {
                    scope.onUpdate();
                    scope.toggleEditmode();
                };
            }
        };
    })
    .directive('fuiRetroname', function (retrospectives) {
        return {
            templateUrl: 'views/directives/fuiRetroname.html',
            restrict: 'EA',
            replace: true,
            scope: {
                item: '=',
                onUpdate: '&'
            },
            transclude: true,
            link: function postLink(scope, element, attrs) {
                scope.toggleEditmode = function() {
                    scope.showEdit = !scope.showEdit;
                };

                scope.updateRetro = function () {
                    scope.onUpdate();
                    scope.toggleEditmode();
                };
            }
        };
    });