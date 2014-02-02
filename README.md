### IDEX
# Merge

A simple recursive function to merge two objects.

## Usage

### Very basic usage

```js
var object1, object2, object3;

object1 = {
    alpha: {
        a: 'A',
        b: 'B',
        c: 'C'
    }
};

object2 = {
    alpha: {
        b: 'b',
        d: 'd'
    },
    num: [1, 2, 3]
}

object3 = idex.merge(object1, object2);
```

```
$ object3
$ {
      alpha: {
          a: 'A',
          b: 'b',
          c: 'C',
          d: 'd'
      },
      num: [1, 2, 3]
  }
```

> Slightly slower than the like of jQuery.extend but better results on deep objects