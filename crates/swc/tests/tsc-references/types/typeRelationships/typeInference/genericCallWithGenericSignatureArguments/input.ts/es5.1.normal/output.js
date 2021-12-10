// When a function expression is inferentially typed (section 4.9.3) and a type assigned to a parameter in that expression references type parameters for which inferences are being made, 
// the corresponding inferred type arguments to become fixed and no further candidate inferences are made for them.
function foo(a, b) {
    var r;
    return r;
}
//var r1 = foo((x: number) => 1, (x: string) => ''); // error
var r1b = foo(function(x) {
    return 1;
}, function(x) {
    return '';
}); // {} => {}
var r2 = foo(function(x) {
    return null;
}, function(x) {
    return '';
}); // Object => Object
var r3 = foo(function(x) {
    return 1;
}, function(x) {
    return null;
}); // number => number
var r3ii = foo(function(x) {
    return 1;
}, function(x) {
    return 1;
}); // number => number
var a;
var b;
var r4 = foo(function(x) {
    return a;
}, function(x) {
    return b;
}); // typeof a => typeof a
var r5 = foo(function(x) {
    return b;
}, function(x) {
    return a;
}); // typeof b => typeof b
function other(x) {
    var r6 = foo(function(a1) {
        return a1;
    }, function(b1) {
        return b1;
    }); // T => T
    var r6b = foo(function(a2) {
        return a2;
    }, function(b2) {
        return b2;
    }); // {} => {}
}
function other2(x) {
    var r7 = foo(function(a3) {
        return a3;
    }, function(b3) {
        return b3;
    }); // T => T
    var r7b = foo(function(a4) {
        return a4;
    }, function(b4) {
        return b4;
    }); // {} => {}
    var r8 = r7(null);
// BUG 835518
//var r9 = r7(new Date());
}
function foo2(a, b) {
    var r;
    return r;
}
function other3(x) {
    var r8 = foo2(function(a5) {
        return a5;
    }, function(b5) {
        return b5;
    }); // Date => Date
}
