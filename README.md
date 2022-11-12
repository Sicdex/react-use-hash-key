# react-use-hash-key

# Installation

```sh
npm install react-use-hash-key
```

```sh
yarn add react-use-hash-key
```

# Usage

```js
import {useHashKey} from 'react-use-hash-key';

const obj = [
    {
        id: "1",
        title: "My title"
    },
    {
        id: 2,
        title: "My title"
    },
]

function Component1() {
  return obj.map(ent => <MyComponent key={useHashKey(ent.id)} />)
}

function Component2() {
  return obj.map(ent => <MyComponent key={useHashKey(ent.title)} />)
}

```
