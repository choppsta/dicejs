/**
 * examples:
 *   import dice from './Dice';
 *   dice(6).roll().eq(3);  // bool
 *   dice(['one', 'two', 'three']).pick(2)  // ['one', 'three']
 *   dice(12).roll().gt(6)  // bool
 *   dice(['one', 'two', 'three']).roll().in(['two', 'three'])  // bool
 *   dice(6).roll().value()
 */
class Dice {
    constructor(values) {
        this.isArray = Array.isArray(values);
        this.values = this.isArray ? values : parseInt(values, 10); // integer or array of values to pick from
        this.result = null;
    }

    _randomItem() {
        if (this.isArray) return this.values[Math.floor(Math.random() * this.values.length)];
        return Math.floor(Math.random() * this.values) + 1;
    }

    pick(n) {
        n = n || 1;
        this.result = [];
        for (let i = 0; i < n; i++) {
            let val;
            while (!val || this.result.indexOf(val) !== -1) {
                val = this._randomItem();
            }
            this.result.push(val);
        }

        if (this.result.length === 1) this.result = this.result[0];

        return this.result;
    }

    roll() {
        this.result = this._randomItem();
        return this;
    }

    eq(test) {
        return this.result === test;
    }

    lt(test) {
        return this.result < test;
    }

    gt(test) {
        return this.result > test;
    }

    in(test) {
        return test.indexOf(this.result) !== -1;
    }

    value() {
        return this.result;
    }
}

module.exports = function DiceFactory(values) {
    return new Dice(values);
}
