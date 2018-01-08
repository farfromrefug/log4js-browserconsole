
var theConsole = console;
function consoleAppender(layout, timezoneOffset) {
  return function (loggingEvent) {
    var args = layout(loggingEvent, timezoneOffset);
    var level = loggingEvent.level.leveStr.toLowerCase();
    (theConsole[level] || theConsole.log).apply(theConsole, [layout(loggingEvent, timezoneOffset)]);
  };
}

function configure(config, layouts) {
  var layout = layouts.colouredLayout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }
  return consoleAppender(layout, config.timezoneOffset);
}

exports.configure = configure;
