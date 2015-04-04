# bus

> A JavaScript Event Bus written in ES6.

## ES6 Usage
```js
import bus from 'bus';

bus.emit('finish');
```

## ES5 Usage
```js
var bus = require('bus/es5');

bus.emit('finish');
```

## API

### bus.on(event, listener)
Adds a `listener` to the collection for a specified `event`.
- `event` - The name of the event you want to add.
- `listener` - Listener you want to add from given event.

```js
bus.on('live', listener);
```

### bus.once(event, listener)
Adds a one time `listener` to the collection for a specified `event`. It will execute only once.
- `event` - The name of the event.
- `listener` - Listener you want to add from the given event.

```js
bus.once('live', listener);
```

### bus.off(event, listener)
Removes a `listener` from the collection for a specified `event`.
- `event` - The name of the event.
- `listener` - Listener you want to remove from the given event.

```js
bus.off('live', listener);
```

### bus.emit(event, [...args])
Execute each of the `listeners` collection in order with the given parameters.
- `event` - The name of the event you want to emit.
- `[...args]` - The given arguments.

```js
bus.emit('live', 'data1', 'data2');
```

## npm-scripts
```
$ npm run es5
```

```
$ npm run dist
```

```
$ npm run hint
```

## Made with ❤
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
MIT license. Copyright © 2015.