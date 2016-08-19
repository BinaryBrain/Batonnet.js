# Bâtonnet.js

Bâtonnet.js (or Batonnet.js, pronounced /ba.tɔ.nɛ/) is a universal, intercultural and user-friendly way to display numbers.
It provides a lightweight, easy to use library that can convert any positive integers into a more readable form, even across different regional, political and/or religional culture.

## [Demo](https://binarybrain.github.io/Batonnet.js/)

You can see the power and the flexibility of Bâtonnet.js in live action by following [this link](https://binarybrain.github.io/Batonnet.js/).

## Usage

Download [`batonnet.min.js`](batonnet.min.js) and [`batonnet.min.css`](batonnet.min.css) and include them in your web page:

```html
<link rel="stylesheet" type="text/css" href="batonnet.min.css">
<script src="batonnet.min.js"></script>
```

Then, surround numbers you want to convert with a tag containing the class `batonnet` as such:

```html
<p>I've already caught <span class="batonnet">13</span> fishes!</p>
```

And finally call the `Batonnet()` function in javascript once the element is loaded:

```js
Batonnet();
```

