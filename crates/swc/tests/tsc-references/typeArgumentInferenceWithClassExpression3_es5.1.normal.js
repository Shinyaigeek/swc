import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
function foo() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function _class() {
        "use strict";
        _class_call_check(this, _class);
    };
    return undefined;
}
foo(function _class() {
    "use strict";
    _class_call_check(this, _class);
    this.prop = "hello";
}).length;
