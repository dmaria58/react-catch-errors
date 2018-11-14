
# react-catch-errors

A [React Transform](https://github.com/gaearon/babel-plugin-react-transform) that catches errors inside `render()` function and renders a React component with an error message instead.

It’s up to you to choose the React component to render an error message.

解决react内部抛错导致的页面空白无法执行的问题。具体安装步骤如下

## Installation

First, install the [Babel plugin]

```
npm install --save-dev babel-plugin-react-transform
```

Then, install the transform:

```
npm install --save-dev react-catch-errors
```


You may also use a custom component instead.

Now edit your `.babelrc` to include `extra.babel-plugin-react-transform`.  
It must be an array of the transforms you want to use:

```js
{
  "presets": ["es2015", "stage-0"],
  "plugins": [["react-transform", {
    "transforms": [{
      "transform": "react-catch-errors",
      // now go the imports!
      "imports": [
        "react"
      ]
    }]
  }]]
}
```

## License

MIT
