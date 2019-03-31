var Common = new (function () {
    var me = this;
    this.url = '';

    this.Validate = {
        isEmail: function (str) {
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return pattern.test(str);  // returns a boolean
        },
        isNotEmpty: function (str) {
            var pattern = /\S+/;
            return pattern.test(str);  // returns a boolean
        },
        isNumber: function (str) {
            var pattern = /^\d+$/;
            return pattern.test(str);  // returns a boolean
        },
        isSame: function (str1, str2) {
            return str1 === str2;
        }
    };
    this.getParams = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    this.getRandomName = function (prefix, nameLength) {
        var keys = 'zaq1wsx2cde5rfv4bgt6yhnm3ju7iklo9pZAQWSXCDERFVBG8TYHNMJ0UIKLOP';
        var result = '' + prefix;
        for (var i = 0; i < nameLength; i++) {
            result += keys[me.random(0, keys.length - 1)];
        }
        return result;
    };
    this.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this.getJsonData = function (jsonData) {
        if (me.isNull(jsonData)) {
            return { result: false, message: jsonData };
        }
        if (jsonData.indexOf('Method is not support') >= 0) {
            return { result: false, message: jsonData };
        } else {
            return JSON.parse(jsonData);
        }
    };
    this.callback = function (func, dynamic) {
        if (!me.isNull(func) && typeof func === 'function') {
            var args = [];
            for (var i = 1; i < arguments.length; i++)
                args.push(arguments[i]);
            func.apply(this, args);
        }
    };
    this.isNull = function (obj) {
        if (obj === null || obj === undefined || obj === "") {
            return true;
        } else {
            return false;
        }
    };
    this.formatDateTime = function (data) {
        var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
        ];
        var date = new Date(data);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getUTCFullYear();
        return monthNames[month] + ', ' + day + ' ' + year;
    };
    this.formatDateTimeString = function (data) {
        var date = new Date(data);
        var day = date.getDate();
        day = String(day);
        var sub = "0";
        if (day.length == 1) {
            day = sub.concat(day);
        }
        var month = date.getMonth() + 1;
        month = String(month);
        if (month.length == 1) {
            month = sub.concat(month);
        }
        var year = date.getUTCFullYear();
        return day + '/' + month + '/' + year;
    };
    this.formatTimeToString = function (datetime) {
        var date = new Date(datetime);
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var part = '';
        if (Number(hour) < 12) {
            part = 'AM';
        } else {
            hour = Number(hour) % 12;
            part = 'PM';
        }
        if (Number(hour) < 10) {
            hour = '0' + hour;
        }
        if (Number(minutes) === 0) {
            minutes = '00';
        }
        if ((Number(minutes) < 10) && (Number(minutes) !== 0)) {
            minutes = '0' + minutes;
        }
        return hour + ':' + minutes + ' ' + part;
    };
    this.formatString = function (str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    }
});