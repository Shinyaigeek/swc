var M, A = function() {
    "use strict";
    var Constructor;
    function A() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, A);
    }
    return (function(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    })(Constructor = A, [
        {
            key: "foo",
            value: function() {
                return 1;
            }
        }
    ]), A;
}();
!function(M1) {
    var n;
    M1.n = n;
}(M || (M = {
}));
var objA = new A();
objA.a, M.n, A.foo(), objA.a, M.n, objA.a, M.n;
