var Libs = {};
Libs.Json = new (function () {
    this.toString = function (obj) {
        return JSON.stringify(obj);
    };
    this.toObject = function(str) {
        return JSON.parse(str);
    };
})();

/**
 * url: link
 * data: json
 * optionCallback: { success: Common.callback(func_name_1, params), error: Common.callback(func_name_2, params) }
 * isAsync: boolean
 */
Libs.send = function (url, data, header, optionCallback, isAsync) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        async: isAsync,
        headers: header,
        success: function (data) {
            data = Libs.Json.toObject(data);
            optionCallback.success(data);
        },
        error: function (err) {
            Console.Bug('Ajax Fail!');
            optionCallback.error();
        }
    });
};

/**
 * url: link
 * data: json
 * optionCallback: { success: Common.callback(func_name_1, params), error: Common.callback(func_name_2, params) }
 * isAsync: boolean
 */
Libs.exeAjax = function (url, data, optionCallback, isAsync) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        async: isAsync,
        success: function (data) {
            data = Libs.Json.toObject(data);
            optionCallback.success(data);
        },
        error: function (err) {
            Console.Bug('Ajax Fail!');
            optionCallback.error();
        }
    });
};