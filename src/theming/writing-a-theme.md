# Writing a Theme

## Theme Basics

To write a theme, create a .vuepress/theme directory in your docs root, and then create a Layout.vue file:

```md
.
└─ .vuepress
└─ theme
└─ Layout.vu
```

From there it’s the same as developing a normal Vue application. It’s entirely up to you how to organize your theme.

## Content Outlet

The compiled content of the current .md file being rendered will be available as a special `<Content/>` global component. You will need to render it somewhere in your layout to display the content of the page. The simplest theme can be a single Layout.vue component with the following content:

```html
<template>
  <div class="theme-container">
    <content />
  </div>
</template>
```

Also see: [Markdown Slot](https://vuepress.vuejs.org/guide/markdown-slot.html)

## Directory Structure

One Layout.vue might not be enough, and you might also want to define more layout components in the theme for using on different pages. You may also want to customize the palette, and even apply some plugins.

So it’s time to reorganize your theme, an agreed theme directory structure is as follows:

::: tip Structure
theme  
├── global-components  
│ └── xxx.vue  
├── components  
│ └── xxx.vue  
├── layouts  
│ ├── Layout.vue (Mandatory)  
│ └── 404.vue  
├── styles  
│ ├── index.styl  
│ └── palette.styl  
├── templates  
│ ├── dev.html  
│ └── ssr.html  
├── index.js  
├── enhanceApp.js  
└── package.json  
:::
