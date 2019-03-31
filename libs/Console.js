Console = new (function Console() {
    var me = this;
    this.isTrack = true;
    this.isLog = true;
    var style = function (icon) {
        return 'background: url(' + window.location.origin + icon + ') no-repeat top left; background-size: 14px 14px';
    };
    var getExeLine = function (err) {
        var err = new Error('');
        var lines = err.stack.split('re');
        var count = 1;
        for (var i = lines.length - 2; i > 3; i--) {
            console.log(lines[i].replace('at', '[' + count + ']'));
            count++;
        }
    };
    var log = function (message, icon) {
        if (me.isLog) {
            if (me.isTrack) {
                console.groupCollapsed('%c   ' + message, style(icon));
                console.log(message);
                getExeLine();
                console.groupEnd();
            } else {
                console.log('%c   ' + message, style(icon));
            }
        }
    };
    this.Bug = function (message) {
        log(message, '/img/bug.png');
    };
    this.Info = function (message) {
        log(message, '/img/info.png');
    };
    this.Warn = function (message) {
        log(message, '/img/warn.png');
    };
    this.Log = function (message) {
        log(message, '/img/log.png');
    };
})();