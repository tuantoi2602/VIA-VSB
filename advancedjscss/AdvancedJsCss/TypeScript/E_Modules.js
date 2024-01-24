/*
* Základní modul
*/
var SimpleModule;
(function (SimpleModule) {
    var PrivateClass = /** @class */ (function () {
        function PrivateClass() {
        }
        return PrivateClass;
    }());
    var PublicClass = /** @class */ (function () {
        function PublicClass() {
        }
        return PublicClass;
    }());
    SimpleModule.PublicClass = PublicClass;
})(SimpleModule || (SimpleModule = {}));
var publicClassInstance = new SimpleModule.PublicClass();
// Pro ukázku odkomentovat
//var privateClassInstance = new SimpleModule.PrivateClass();
/*
* Zanoření modulů
*/
var Core;
(function (Core) {
    var Geometry;
    (function (Geometry) {
        var Mathematic = /** @class */ (function () {
            function Mathematic() {
            }
            Mathematic.Distance = function (x1, y1, x2, y2) {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            };
            return Mathematic;
        }());
        Geometry.Mathematic = Mathematic;
    })(Geometry = Core.Geometry || (Core.Geometry = {}));
    var Security;
    (function (Security) {
        var Hash = /** @class */ (function () {
            function Hash() {
            }
            Hash.Md5 = function (text) {
                return null;
            };
            return Hash;
        }());
        Security.Hash = Hash;
    })(Security || (Security = {}));
})(Core || (Core = {}));
var distance = Core.Geometry.Mathematic.Distance(20, 10, 66, 12.8);
//# sourceMappingURL=E_Modules.js.map