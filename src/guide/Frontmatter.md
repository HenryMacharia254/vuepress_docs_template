# Frontmatter

Any Markdown file that contains a YAML frontmatter block will be processed by gray-matter (opens new window). The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:

```md
---
title: Blogging with VuePress
lang: en-US
---
```

Between the triple-dashed lines, you can set p[redefined variables](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables), or even create custom ones of your own. These variables can be used via the `$frontmatter`variable.

Here’s an example of how you could use it in your Markdown file:

```md
---
title: Blogging with VuePress
lang: en-US
---

# {{ $frontmatter.title }}

My blog post is written in {{ $frontmatter.language }}.
```

## Alternative frontmatter Formats

VuePress also supports JSON and TOML (opens new window)frontmatter syntax.

JSON frontmatter needs to start and end in curly braces:

```md
---
{ "title": "Blogging Like a Hacker", "lang": "en-US" }
---
```

TOML frontmatter needs to be explicitly marked as TOML:

```md
---toml
title = "Blogging Like a Hacker"
lang = "en-US"

---
```

## Predefined Variables

> title  
> Type: `string`  
> Default: `h1_title || siteConfig.title`  
> Title of the current page.

> lang  
> Type: `string`  
> Default: `en-US`  
> Language of the current page.

> description  
> Type: `string`  
> Default: `siteConfig.description`  
> Description of the current page.

> layout  
> Type: `string`  
> Default: `Layout`  
> Set the layout component of the current page.

> permalink  
> Type: `string`  
> Default: `siteConfig.permalink`
> See Permalinks for details.

> metaTitle  
> Type: string  
> Default: `${page.title} | ${siteConfig.title}`  
> Override the default meta title.

> meta  
> Type: `array`  
> Default: `undefined`  
> Specify extra meta tags to be injected:

```yaml
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

```

> canonicalUrl 1.7.1+  
> Type: `string`  
> Default: `undefined`  
> Set the canonical URL for the current page.

##  Predefined Variables Powered By Default Theme

> navbar  
> Type: `boolean`  
> Default: `undefined`  
> See [Default Theme Config > Disable the Navbar](https://vuepress.vuejs.org/theme/default-theme-config.html#disable-the-navbar) for details.

> sidebar  
> Type:`boolean|'auto`'  
> Default: `undefined`  
> See D[efault Theme Config > Sidebar](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar) for details.

> prev
> Type: `boolean|string`
> Default: `undefined`  
> See [Default Theme Config > Prev / Next Links](https://vuepress.vuejs.org/theme/default-theme-config.html#prev-next-links) for details.

> next
> Type: `boolean|string`
> Default: `undefined`  
> See [Default Theme Config > Prev / Next Links](https://vuepress.vuejs.org/theme/default-theme-config.html#prev-next-links) for details.

> search  
> Type: `boolean`  
> Default: `undefined`  
> See [Default Theme Config > Built-in Search](https://vuepress.vuejs.org/theme/default-theme-config.html#built-in-search) for details.

> tags  
> Type: `array`  
> Default: `undefined`  
> See [Default Theme Config > Built-in Search.](https://vuepress.vuejs.org/theme/default-theme-config.html#built-in-search) For details.
