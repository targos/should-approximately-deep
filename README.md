# should-approximately-deep

Extend should.js to assert arrays with approximate values

## Installation

```js
npm install should-approximately-deep
```

## Usage

### approximatelyDeep(otherValue, delta)

Asserts if a chained object is a number or a (potentially multidimensional) array of
numbers and that its values are near the ones from `otherValue` within the `delta` margin.
Each array must have the same number of elements.

```js
[1, 2, 3].should.be.approximatelyDeep([1, 2.01, 2.99], 0.1);
[1, 2, 3].should.not.be.approximatelyDeep([1, 2], 0.1);
[[1, 2, 3], [4, 5, 6]].should.be.approximatelyDeep([[1.05, 1.95, 3],[4, 4.98, 6]], 0.1);
```

## License

MIT