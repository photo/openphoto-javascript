/*
 * This is not producion quality code :)
 * Author: Jaisen Mathai <jaisen@jmathai.com>
 */
(function() {
  if ( typeof(OpenPhoto) === "undefined") {
    OpenPhoto = {};
  }

  // GLOBAL
  functions = [];

  // PRIVATE
  var log = function(msg) { if(typeof(console) !== 'undefined') {  console.log(msg); } };
  var host = (function() { 
    var scripts = document.getElementsByTagName('script'),
        script;
    for(var i=0; i<scripts.length; i++) {
      script = scripts[i];
      if(script.src !== "undefined" && script.src.indexOf('OpenPhoto.js') !== -1) {
        return script.getAttribute("data-site") || log("No data-host attribute on the script tag");
      }
    }
  })();
  var generateUrl = function(endpoint) {
    return host+endpoint;
  };

  function Api() {
    this.load = function(endpoint) {
      if(arguments.length > 0) {
        var scriptId = 'OpenPhotoScriptId' + parseInt(Math.random()*100000);
        var callback = arguments[1] || null;
        var cb;
        if(typeof callback === "function") {
          cb = "OpenPhoto"+parseInt(Math.random()*100000);
          functions[cb] = callback;
          callback = "functions['"+cb+"']";
        }
        
        var url = generateUrl(endpoint);
        var head = document.getElementsByTagName('head').item(0);
        var scriptTag = document.getElementById(scriptId);
        script = document.createElement('SCRIPT');
        script.src = url + (callback !== null ? '&callback='+callback : '');
        script.type = 'text/javascript';
        script.id = scriptId;
        head.appendChild(script);
      }
    };
  }
  
  OpenPhoto.Api = new Api();
})();
