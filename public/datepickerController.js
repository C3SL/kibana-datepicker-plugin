import _ from 'lodash';
import dateMath from '@elastic/datemath';
import moment from 'moment';
import 'ui/timepicker/quick_ranges';
import 'ui/timepicker/time_units';
import uiModules from 'ui/modules';

const module = uiModules.get('kibana/kibana-datepicker-plugin', ['kibana']);

module.controller('KbnDatePickerController', function ($scope, $rootScope, $timeout) {
    $scope.format = 'MMMM Do YYYY, HH:mm:ss.SSS';
    var absoluteApplied = false;

    $scope.time = {
        from: moment(),
        to: moment(),
        absolute_from: moment(),
        absolute_to: moment()
    };

    $scope.absolute = {
        from: moment(),
        to: moment()
    };

    $scope.$watch('time.absolute_from', function (date) {
        if (_.isDate(date)) $scope.time.absolute_from = moment(date);
    });

    $scope.$watch('time.absolute_to', function (date) {
        if (_.isDate(date)) $scope.time.absolute_to = moment(date);
    });

    $scope.setToNow = function () {
        $scope.time.absolute_to = moment();
    };

    $scope.applyAbsolute = function () {
        $scope.from = moment($scope.absolute.from);
        $scope.to = moment($scope.absolute.to);
        $scope.setAbsolute();
    };

    $scope.setAbsolute = function() {
        absoluteApplied = true;
        $rootScope.$$timefilter.time.from = $scope.time.from = $scope.time.absolute_from;
        $rootScope.$$timefilter.time.to = $scope.time.to = $scope.time.absolute_to;
    };

    $rootScope.$watchMulti([
        '$$timefilter.time.from',
        '$$timefilter.time.to'
    ], setTime);

    function setTime(timeArray) {
        if (absoluteApplied) {
            absoluteApplied = false;
            return;
        }
        // Update our $scope, since time was not updated by this plugin.
        $scope.time = {
            from: timeArray[0],
            to: timeArray[1],
            absolute_from: dateMath.parse(timeArray[0]),
            absolute_to: dateMath.parse(timeArray[1], true)
        }
    }
});
