// @target: es6
class A {
    constructor(){
        this.d = function() {
            return new.target;
        };
        const a = new.target;
        const b = ()=>new.target;
    }
}
A.c = function() {
    return new.target;
};
class B extends A {
    constructor(){
        super();
        const e = new.target;
        const f = ()=>new.target;
    }
}
function f1() {
    const g = new.target;
    const h = ()=>new.target;
}
const f2 = function() {
    const i = new.target;
    const j = ()=>new.target;
};
const O = {
    k: function() {
        return new.target;
    }
};
