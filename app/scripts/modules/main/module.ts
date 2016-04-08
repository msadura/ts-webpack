require('./config.ts');
require('./style.scss');


module.exports = (function(){

  function log() {
 console.info('modules/main/module.ts');
  }

  return {
    log: log
  }

})();

