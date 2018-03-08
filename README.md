# Measure Function Time

Measure js function time.

## Usage

```
npm i measure-function-time
```

```ecmascript 6
const measure = require('measure-function-time')

const milliseconds = measure(() => {
  // some time consuming work
  // ...
})
```

## API

### measure

```
const measure = require('measure-function-time')

(fn, ...args) => milliseconds
```

### measureAsync

```
const measure = require('measure-function-time')
const measureAsync = measure.async

(fn, ...args) => promise => milliseconds
```

## License

MIT