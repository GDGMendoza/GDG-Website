(function() {
  'use strict';

  angular
    .module('gdgWebpage')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
