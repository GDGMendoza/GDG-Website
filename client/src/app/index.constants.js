/* global toastr:false, moment:false, Promise:false, _:false */
(function() {
  'use strict';

  angular
    .module('gdgWebpage')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('$bluebird', Promise)
    .constant('_', _)

})();
