# Dice JS

Make random decisions/pick random items with a readable API.

    npm install dicejs

Example:

    import d from 'dicejs'

    d(6).roll().eq(3)  // bool
    d(['one', 'two', 'three']).pick(2)  // ['one', 'three']
    d(12).roll().gt(6)  // bool
    d(['one', 'two', 'three']).roll().in(['two', 'three'])  // bool
    d(6).roll().value()  // int


Without build tools:

    <script src="./node_modules/dicejs/lib/dice.min.js"></script>
    <script>
      DiceJS(6).roll().eq(3);  // bool
      DiceJS(['one', 'two', 'three']).pick(2);  // ['one', 'three']
      DiceJS(12).roll().gt(6);  // bool
      DiceJS(['one', 'two', 'three']).roll().in(['two', 'three']);  // bool
      DiceJS(6).roll().value();  // int
    </script>
