---
title: 'React component with conditional className attribute'
description: 'The correct way to conditionally apply a classname to a React component or leave the attribute completely empty otherwise.'
logo: 'react.png'
---

## The wrong way

```jsx
const MyComponent = ({ enabled }) => {
  return <div className={enabled ? 'enabled' : ''}> Some content </div>
}
```

Unfortunately, the resulting output will look as follows:

```markup
<div class>Some content</div>
```

Notice the `class` attribute is included in the element but with an empty value, which is not valid HTML.

## The correct way

```jsx
const MyBetterComponent = ({ enabled }) => {
  return <div className={enabled ? 'enabled' : null}> Some content </div>
}
```

Now the output for the rendered element will be:

```markup
<div>Some content</div>
```

## Pass className as a prop alongside other props

Let's say that our component will sometimes need additional classnames (for styling purposes mainly) but not always. The solution is simple.

```jsx
const MyComponent = ({ someProp, anotherProp, className = null }) => {
  return <div className={className}> Some content </div>
}
```

Here the `className` prop has a default value of `null` so, if we don't pass it as a prop (with a value) to our React component, the `class` attribute won't be added to the rendered element.

And when our component needs to be styled with additional classes, we simply pass them as a prop:

```jsx
<MyComponent className="text-green-500" someProp={true} anotherProp={false}>
  Some Content
</MyComponent>
```
