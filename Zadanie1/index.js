var Stat = /** @class */ (function () {
    function Stat() {
        this.startApp();
    }
    Stat.prototype.startApp = function () {
        this.getInputs();
        this.watchInput();
    };
    Stat.prototype.getInputs = function () {
        this.data1I = document.querySelector('#data1');
        this.data2I = document.querySelector('#data2');
        this.data3I = document.querySelector('#data3');
        this.data4I = document.querySelector('#data4');
        this.sum = document.querySelector('#sum');
        this.avg = document.querySelector('#avg');
        this.min = document.querySelector('#min');
        this.max = document.querySelector('#max');
    };
    Stat.prototype.watchInput = function () {
        var _this = this;
        this.data1I.addEventListener('input', function () { return _this.computeData(); });
        this.data2I.addEventListener('input', function () { return _this.computeData(); });
        this.data3I.addEventListener('input', function () { return _this.computeData(); });
        this.data4I.addEventListener('input', function () { return _this.computeData(); });
    };
    Stat.prototype.computeData = function () {
        var d1 = +this.data1I.value;
        var d2 = +this.data2I.value;
        var d3 = +this.data3I.value;
        var d4 = +this.data4I.value;
        var s = d1 + d2 + d3 + d4;
        var av = s / 4;
        var mi = Math.min(d1, d2, d3, d4);
        var ma = Math.max(d1, d2, d3, d4);
        this.showStat(s, av, mi, ma);
    };
    Stat.prototype.showStat = function (s, av, mi, ma) {
        this.sum.value = s.toString();
        this.avg.value = av.toString();
        this.min.value = mi.toString();
        this.max.value = ma.toString();
    };
    return Stat;
}());
var start = new Stat();
