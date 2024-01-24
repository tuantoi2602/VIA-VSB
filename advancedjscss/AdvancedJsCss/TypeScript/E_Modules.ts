
/*
* BAsic module
*/
module SimpleModule{

    class PrivateClass {

    }

    export class PublicClass {

    }

}

var publicClassInstance = new SimpleModule.PublicClass();

// Uncomment for error
//var privateClassInstance = new SimpleModule.PrivateClass();





/*
* Nesting of modules
*/
module Core {

    export module Geometry {

        export class Mathematic {

            public static Distance(x1: number, y1: number, x2: number, y2: number) {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }

        }

    }

    module Security {
        export class Hash {
            public static Md5(text: string) {
                return null;
            }
        }
    }


}

var distance: number = Core.Geometry.Mathematic.Distance(20, 10, 66, 12.8);
// Uncomment for error
//var md5Hash: string = Core.Security.Hash.Md5("moje heslo");








/*
* Since version 1.6 there is also namespace (just alias for "module")
*/
namespace MyNamespace{

}