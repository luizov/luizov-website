---
title: 'Dynamic Routing and Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/articles/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/logo.svg'
ogImage:
  url: '/articles/dynamic-routing/cover.jpg'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

![Some image](/articles/dynamic-routing/fish.jpg)
*An image of a golden fish*

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

## Syntax Highlighting Examples

### JS

```js
/* =======================
=
=  Modules
=
========================*/

// From component folder
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';

// From layout folder
import { Header } from '../layouts/header.js';
import { Sidebar } from '../layouts/sidebar.js';

import * as math from "./lib/math";
import { sum, pi } from "./lib/math";
import exp, { pi, e } from './lib/mathplusplus';
````

```js
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    getPos() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

export { Shape }

let shape = new Shape(1, 10, 20);
console.log(`Shape pos:`, JSON.stringify(shape.getPos()));
shape.move(15, 35);
console.log(`Shape pos:`, JSON.stringify(shape.getPos()));
```
### CSS

```css
@import "manual.css";

@font-face {
  font-family: DroidSans;
  src: url(DroidSans.ttf);
  unicode-range: U+000-5FF, U+1e00-1fff, U+2000-2300;
}

h1.mystyle:lang(en) {
  color: blue; /* TODO: change THIS to yellow for next version! */
  border: rgb(255, 0, 0);
  background-color: #fafafa;
  background: url(hello.jpg) !important;
}

div > p,
p ~ ul,
input[type="radio"] {
  color: green;
  width: 80%;
}

#header:after {
  color: red;
}

@font-face {
  font-family: Chunkfive;
  src: url("Chunkfive.otf");
}

body,
.usertext {
  color: #f0f0f0;
  background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^="http"]::after {
    content: attr(href);
  }
}
```

### JSX

```jsx
import React, { Component } from 'react';
import { connect } from 'redux';

const Header = () => {
  <header className="container" />
}

class Home extends Component {
  state = {
    showNav: true
  };

  render() {
    const { menus, ...opts } = this.props;

    return (
      <div>
        <Header {...opts} menus={menus} />
      </div>
    )
  }
}

const mapStateToProps = ({ menus, user }) => ({
  menus,
  user,
})

export default connect(mapStateToProps)(Home)
```
