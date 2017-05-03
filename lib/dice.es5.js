"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * examples:
 *   import dice from './Dice';
 *   dice(6).roll().eq(3);  // bool
 *   dice(['one', 'two', 'three']).pick(2)  // ['one', 'three']
 *   dice(12).roll().gt(6)  // bool
 *   dice(['one', 'two', 'three']).roll().in(['two', 'three'])  // bool
 *   dice(6).roll().value()
 */
var Dice = function () {
    function Dice(values) {
        _classCallCheck(this, Dice);

        this.isArray = Array.isArray(values);
        this.values = this.isArray ? values : parseInt(values, 10); // integer or array of values to pick from
        this.result = null;
    }

    _createClass(Dice, [{
        key: "_randomItem",
        value: function _randomItem() {
            if (this.isArray) return this.values[Math.floor(Math.random() * this.values.length)];
            return Math.floor(Math.random() * this.values) + 1;
        }
    }, {
        key: "pick",
        value: function pick(n) {
            n = n || 1;
            this.result = [];
            for (var i = 0; i < n; i++) {
                var val = void 0;
                while (!val || this.result.indexOf(val) !== -1) {
                    val = this._randomItem();
                }
                this.result.push(val);
            }

            if (this.result.length === 1) this.result = this.result[0];

            return this.result;
        }
    }, {
        key: "roll",
        value: function roll() {
            this.result = this._randomItem();
            return this;
        }
    }, {
        key: "eq",
        value: function eq(test) {
            return this.result === test;
        }
    }, {
        key: "lt",
        value: function lt(test) {
            return this.result < test;
        }
    }, {
        key: "gt",
        value: function gt(test) {
            return this.result > test;
        }
    }, {
        key: "in",
        value: function _in(test) {
            return test.indexOf(this.result) !== -1;
        }
    }, {
        key: "value",
        value: function value() {
            return this.result;
        }
    }]);

    return Dice;
}();

module.exports = function DiceFactory(values) {
    return new Dice(values);
};
