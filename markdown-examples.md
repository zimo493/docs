# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## ImgViewer

<br/>
<div style="display: flex; gap: 20px">
  <img src="https://cn.vuejs.org/logo.svg" alt="Vue" width="100" >
  <img src="https://vitepress.dev/vitepress-logo-large.svg" alt="Vitepress" width="100" >
  <img src="https://chat.deepseek.com/favicon.svg" alt="DeepSeek" width="100">
  <img src="https://pinia.vuejs.org/logo.svg" alt="Pinia" width="100">
</div>

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
