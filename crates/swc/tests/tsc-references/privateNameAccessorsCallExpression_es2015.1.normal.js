function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
var _fieldFunc = new WeakMap(), _fieldFunc2 = new WeakMap();
// @target: es2015
class A {
    test() {
        var _ref;
        _classPrivateFieldGet(this, _fieldFunc).call(this);
        const func = _classPrivateFieldGet(this, _fieldFunc);
        func();
        new (_classPrivateFieldGet(this, _fieldFunc))();
        const arr = [
            1,
            2
        ];
        _classPrivateFieldGet(this, _fieldFunc2).call(this, 0, ...arr, 3);
        const b = new (_classPrivateFieldGet(this, _fieldFunc2))(0, ...arr, 3);
        const str = _classPrivateFieldGet(this, _fieldFunc2).bind(this)`head${1}middle${2}tail`;
        _classPrivateFieldGet(_ref = this.getInstance(), _fieldFunc2).bind(_ref)`test${1}and${2}`;
    }
    getInstance() {
        return new A();
    }
    constructor(){
        _classPrivateFieldInit(this, _fieldFunc, {
            get: get_fieldFunc,
            set: void 0
        });
        _classPrivateFieldInit(this, _fieldFunc2, {
            get: get_fieldFunc2,
            set: void 0
        });
        this.x = 1;
    }
}
function get_fieldFunc() {
    return function() {
        this.x = 10;
    };
}
function get_fieldFunc2() {
    return function(a, ...b) {};
}
