'use strict';

angular.module('retrospectApp')
    .factory('retrospectives', [
        '$resource',
        'SERVICE_URL',
        function ($resource, SERVICE_URL) {
            return $resource(SERVICE_URL + '/retrospectives/:retroId', {}, {
            	update: { method:'PUT' }
            });
        }
    ]);
