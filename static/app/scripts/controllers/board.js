'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'retrospectives',
        'tickets',

        function ($scope, $routeParams, retrospectives, tickets, BoardService) {
            var updateTickets;

            $scope.retroId = $routeParams.retroId;
            $scope.retroName = '';
            $scope.tickets = [];

            $scope.deleteTicket = function (ticket) {
                var index = $scope.tickets.indexOf(ticket);

                tickets.delete({'ticketId': ticket.id, 'retroId': $scope.retroId}, function () {
                    console.log('got a response');
                });

                $scope.tickets.splice(index, 1);
            };

            $scope.updateTickets = function () {
                console.log('Updating tickets.');
                tickets.get({'retroId': $scope.retroId}, function (tickets) {
                    console.log('Got tickets');
                    $scope.tickets = tickets.results;
                });
            };

            retrospectives.get({'retroId': $scope.retroId}, function (retrospective) {
                $scope.retroName = retrospective.name;
                $scope.retrospective = retrospective;
            });

            $scope.updateRetro = function () {
                retrospectives.update({'retroId': $scope.retroId}, {'name':$scope.retrospective.name}, function () {
                    console.log('Updating...');
                }, function (error) {
                    console.error('Error updating retrospective name', error);
                });
            };

            $scope.updateTickets();
        }
    ]
);
