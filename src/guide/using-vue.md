# Vue in markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

```markdown
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

Note this does not fix components or libraries that access Browser APIs on import. To use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:

```vue
<script>
export default {
  mounted() {
    import("./lib-that-access-window-on-import").then((module) => {
      // use code
    });
  },
};
</script>
```

If your module export default a Vue component, you can register it dynamically:

```vue
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
    };
  },

  mounted() {
    import("./lib-that-access-window-on-import").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>
```

Also see:

Vue.js > [Dynamic Components](https://vuejs.org/v2/guide/components.html#Dynamic-Components)

# Templating

## Interpolation

Each Markdown file is first compiled into HTML and then passed on as a Vue component to vue-loader. This means you can use Vue-style interpolation in text:

Input

```md
{{ 1 + 1 }}
```

Output

```
2
```

## Directives

Directives also work:

Input

```md
<span v-for="i in 3">{{ i }} </span>
```

Output

```
1 2 3
```

# Access to Site & Page Data

The compiled component does not have any private data but does have access to the site metadata and computed properties. For example:

Input

```md
{{ $page }}
```

Output

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## Escaping

By default, fenced code blocks are automatically wrapped with `v-pre`. To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the `v-pre` custom container:

Input

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

Output

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Using Components

Any `*.vue` files found in .vuepress/components are automatically registered as [global](https://vuejs.org/v2/guide/components-registration.html#Global-Registration), [async](https://vuejs.org/v2/guide/components-registration.html#Global-Registration) (opens new window)components. For example:

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

Inside any Markdown file you can then directly use the components (names are inferred from filenames):

```md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

::: warning Important
Make sure a custom component’s name either contains a hyphen or is in PascalCase. Otherwise it will be treated as an inline element and wrapped inside a `<p>` tag, which will lead to hydration mismatch because `<p>` does not allow block elements to be placed inside it
:::

## Using Pre-processors

VuePress has built-in webpack support for the following pre-processors: `sass`, `scss`, `less`, `stylus` and `pug`. All you need to do is installing the corresponding dependencies. For example, to enable `sass`:

```sh
yarn add -D sass-loader node-sass
```

Now you can use the following in Markdown and theme components:

```vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

Using `<template lang="pug">`requires installing `pug` and `pug-plain-loader`:

```sh
yarn add -D pug pug-plain-loader
```

::: tip TIP

If you are a Stylus user, you don’t need to install stylus and stylus-loader in your project; VuePress uses Stylus internally.

For pre-processors that do not have built-in webpack config support, you will need to extend the internal webpack config and install the necessary dependencies.
:::

## Script & Style Hoisting

Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases, you can directly write root-level `<script>` or `<style>` blocks in the Markdown file. These will be hoisted out of the compiled HTML and used as the `<script>` and `<style>` blocks for the resulting Vue single-file component:

<p style="color:red;">This is styled by inline CSS.</p>

# Built-In Components

## OutboundLink stable

The indicator<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
is used to denote external links. In VuePress, this component has been followed by every external link.
