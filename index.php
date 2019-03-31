<html>
<head>
    <meta charset="utf-8">
    <title>Page Title</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="./libs/Console.js"></script>
    <script src="./libs/Common.js"></script>
    <script src="./libs/Libs.js"></script>
</head>
<body>
    <script type="text/javascript">
        var a = {
            d : "d",
            a : "aa",
            b : "bbb",
            c : "cccc"
        };
        var b = '{"d":"d","a":"aa","b":"bbb","c":"cccc"}';
        Console.Log(Libs.Json.toString(a));
        Console.Log(Libs.Json.toObject(b));

        function callback1 (data) {
            Console.Log(data);
        }

        function callback2 () {
            Console.Log('run when ajax error');
        }

        Libs.exeAjax('test', a, {
            success: callback1,
            error: callback2,
        }, false);
    </script>
</body>
</html>