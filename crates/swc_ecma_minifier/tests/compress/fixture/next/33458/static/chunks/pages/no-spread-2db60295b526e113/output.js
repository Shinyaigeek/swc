(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        492
    ],
    {
        5467: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/no-spread",
                function() {
                    return __webpack_require__(1918);
                }
            ]);
        },
        2726: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Z: function() {
                    return components_Form;
                }
            });
            var jsx_runtime = __webpack_require__(5893), react = __webpack_require__(7294), components_Input = function(param) {
                var value = param.value, onChange = param.onChange;
                return (0, jsx_runtime.jsx)("input", {
                    value: value,
                    onChange: onChange
                });
            }, components_Form = function(param) {
                var value = param.value, onChange = param.onChange;
                return (0, react.useEffect)(function() {
                    console.log("EFFECT");
                }, []), (0, jsx_runtime.jsx)(components_Input, {
                    value: value,
                    onChange: onChange
                });
            };
        },
        1918: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                "default": function() {
                    return PageWithNoSpread;
                }
            });
            var jsx_runtime = __webpack_require__(5893), react = __webpack_require__(7294), Form = __webpack_require__(2726), NoSpread = function(param) {
                var value = param.value, onChange = param.onChange;
                return (0, jsx_runtime.jsx)(Form.Z, {
                    value: value,
                    onChange: onChange
                });
            };
            function PageWithNoSpread() {
                var ref = (0, react.useState)(""), text = ref[0], setText = ref[1], handleChange = (0, react.useCallback)(function(e) {
                    setText(e.target.value);
                }, []);
                return (0, jsx_runtime.jsx)(NoSpread, {
                    onChange: handleChange,
                    value: text
                });
            }
        }
    },
    function(__webpack_require__) {
        __webpack_require__.O(0, [
            774,
            888,
            179
        ], function() {
            return __webpack_require__(__webpack_require__.s = 5467);
        }), _N_E = __webpack_require__.O();
    }
]);
