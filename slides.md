```yaml
theme: ./theme
drawings:
  persist: false
title: My CSS journey
hideInToc: true
layout: full
```

<div class="flex items-center justify-center"> 
<h1 class='glowing-button'><span class='glowing-text'>B<span class='faulty-letter'>O</span>NJOUR</span></h1>
</div>

---

```yaml
layout: image
hideInToc: true
image: '/images/pixel-perfect-studios.webp'
```

---

```yaml
layout: full
hideInToc: true
```

<div class="flex flex-col items-center justify-center gap-4">
<h1 class="text-white font-semibold">produced by</h1>
<img v-click src="/images/drake.webp" alt="drake" class="max-h-[20rem] rounded-2xl">
</div>

---

```yaml
layout: image
hideInToc: true
image: '/images/stars-bg.webp'
```

<div style="color: #EBD71C" class="flex items-center justify-center h-full">
<div class="w-1/2 font-semibold text-justify mb-10" style="transform: perspective(144px) rotateX(10deg)"><span v-click>In a close galaxy called Milky Way, on a planet named Earth, a tale unfolds — a saga of an extraordinary and unassuming guy that you are about to meet.</span><br><br><span v-click>Our story happens in France, specifically in Montreuil 93 RPZ gang brr-brr skidiki-pap-pap.</span><br><br><span v-click>Brace yourselves, for the epic journey is about to begin, transcending the ordinary and plunging into the extraordinary, where destinies are forged and legends are born.</span></div>
</div>

---

```yaml
layout: full
hideInToc: true
```

<div class="flex flex-col items-center justify-center gap-4">
<div class="relative">
<img v-click src="/images/arrows.svg" alt="arrows" class="max-h-[26rem]">
<img  src="/images/smarlhens_400x400.webp" alt="Samuel MARLHENS" class="max-h-[10rem] absolute left-1/2 transform -translate-1/2 top-1/2">
</div>
</div>
<span v-click class="text-3xl font-semibold italic text-white">
    <span class="absolute left-24 top-1/2">humble</span>
    <span class="absolute left-40 top-1/4">kind</span>
    <span class="absolute left-60 top-1/8">loyal</span>
    <span class="absolute left-1/2 top-0">honest</span>
    <span class="absolute left-2/3 top-4">cheerful</span>
    <span class="absolute right-16 top-40">blue eyes</span>
    <span class="absolute right-12 top-1/2">super smart</span>
    <span class="absolute right-1/5 bottom-1/4">polite</span>
    <span class="absolute left-1/5 bottom-1/4">cute</span>
    <span class="absolute left-1/2 transform -translate-x-1/2 bottom-10">And that's me!</span>
</span>

---

```yaml
hideInToc: true
```

<div class="flex justify-center items-center h-full gap-2">
<div class="flex flex-col gap-2">
<h1 class="!text-6xl font-bold">My CSS journey</h1>

<h2>From zero to hero</h2>
</div>

<div>
<img src="/images/painter.webp" alt="painter" class="max-h-[22rem] h-auto w-auto max-w-fit rounded-3xl">
</div>  
</div>

---

```yaml
hideInToc: true
```

# On the menu for this presentation

<div v-click>
<Toc maxDepth="1"></Toc>

<img src="/images/gordon.webp" alt="gordon" class="absolute right-0 bottom-0 max-h-[16rem] h-auto w-auto max-w-fit  scale-x-[-1]">
<img src="/images/philippe-etchebest.webp" alt="gordon" class="absolute right-1/2 bottom-0 max-h-[16rem] h-auto w-auto max-w-fit">
</div>

---

# What is a web page?

<div v-click class="flex flex-col gap-2 mt-4 items-center">

<div class="flex gap-2 w-full justify-center">
    <img src="/images/tada.webp" alt="tada" class="max-h-[22rem] h-auto w-auto max-w-fit">
    <img src="/images/cake.webp" alt="cake" class="max-h-[22rem] h-auto w-auto max-w-fit">
</div>

<p class="text-sm">Source: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">developer.mozilla.org: What is JavaScript</a></p>

</div>

---

## What is HTML?

<div v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">HTML (HyperText Markup Language)</span> is the most basic <span class="underline underline-2 underline-offset-2 underline-sky-500">building block</span> of the Web. It <span class="underline underline-2 underline-offset-2 underline-red-500">defines the meaning and structure</span> of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).

Source: [developer.mozilla.org: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

<img src="/images/jamy.webp" alt="tada" class="absolute left-0 bottom-0 max-h-[22rem] h-auto w-auto max-w-fit">

</div> 
<div v-click>

> [...], for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

Source: [developer.mozilla.org: What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

</div>

---

## What is CSS?

<div v-click>

> Cascading Style Sheets (CSS) is a <span class="underline underline-2 underline-offset-2 underline-sky-500">stylesheet language</span> used to <span class="underline underline-2 underline-offset-2 underline-red-500">describe the presentation</span> of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS <span class="underline underline-2 underline-offset-2 underline-red-500">describes how elements should be rendered</span> on screen, on paper, in speech, or on other media.

Source: [developer.mozilla.org: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

<img src="/images/jamy.webp" alt="tada" class="absolute right-0 bottom-0 max-h-[22rem] h-auto w-auto max-w-fit scale-x-[-1] z-1">

</div>
<div v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">CSS</span> is a language of <span class="underline underline-2 underline-offset-2 underline-sky-500">style rules</span> that we use to apply <span class="underline underline-2 underline-offset-2 underline-red-500">styling</span> to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

Source: [developer.mozilla.org: What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

</div>
<div v-click>

> - [...]
> - CSS saves a lot of work. It can control the layout of multiple web pages all at once
> - External stylesheets are stored in <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">CSS files</span>

Source: [w3schools.com](https://www.w3schools.com/css/css_intro.asp)

</div>

---

## What is JavaScript?

<div v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">JavaScript</span> is a <span class="underline underline-2 underline-offset-2 underline-sky-500">scripting language</span> that enables you to create <span class="underline underline-2 underline-offset-2 underline-red-500">dynamically</span> updating content, control multimedia, animate images, and pretty much everything else.

Source: [developer.mozilla.org: JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

<img src="/images/jamy.webp" alt="tada" class="absolute left-0 bottom-0 max-h-[22rem] h-auto w-auto max-w-fit">

</div>

---

```yaml
layout: cover
```

# Getting started with HTML & CSS

---

## Anatomy of an HTML document

<div class="flex gap-2">
<div class="flex flex-col w-3/5 gap-2" style="--slidev-code-line-height: 32px">

<v-click>

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>

  <body>
    <!-- content aka HTML Elements -->
  </body>
</html>
```

</v-click>

</div>
<div class="flex flex-col w-1/2 gap-2">

<ul class="list-inside ml-2">
<li v-click>
<span class="text-yellow-500"><Arrow x1="530" y1="110" x2="230" y2="115" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-yellow-500 font-bold">doctype</span>: It is a required preamble.</span>
</li>
<li v-click>
<span class="text-amber-500"><Arrow x1="530" y1="140" x2="260" y2="147.5" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-amber-500 font-bold">html</span>: wraps all the content (known as root element)</span>
</li>
<li v-click>
<span class="text-orange-500"><Arrow x1="530" y1="204" x2="180" y2="180" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">head</span>: all the stuff you want to include on the HTML page that <span class="underline underline-2 underline-offset-2 underline-sky-500 italic">isn't</span> the content (e.g. CSS, fonts, scripts, etc.)</span>
</li>
<li v-click>
<span class="text-red-500"><Arrow x1="530" y1="300" x2="180" y2="370" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">body</span>: contains <span class="underline underline-2 underline-offset-2 underline-sky-500 italic">all</span> the content (e.g. text, images, videos, etc.)</span>
</li>
</ul>

<p v-click class="text-sm ml-2">Source: <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document">developer.mozilla.org: HTML basics</a></p>

</div>
</div>

---

## Anatomy of an HTML element (1)

<div v-click>
<img src="/images/grumpy-cat-small.webp" class="rounded-xl h-40 mt-4" />

Source: [developer.mozilla.org: Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_element), [developer.mozilla.org: Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_element)

</div>
<div v-click>

<p class="!mt-4">Non-exhaustive list of HTML elements:</p>

<div class="flex gap-2 mt-2 text-sm">
<div class="flex flex-col gap-2 w-1/2">

- Headings (`<h1>`, `<h2>`, `...`, `<h6>`)
- Paragraph (`<p>`)
- Links (`<a>`)
- Lists (`<ul>`, `<ol>`, `<li>`)
- Images (`<img>`)

</div>
<div class="flex flex-col gap-2 w-1/2">

- Tables (`<table>`, `<tr>`, `<td>`, `<th>`)
- Forms (`<form>`, `<input>`, `<button>`, `<select>`, `<textarea>`)
- Div (`<div>`)
- Span (`<span>`)
- [...]

</div>
</div>
</div>

---

## Anatomy of an HTML element (2)

<div v-click>
<img src="/images/grumpy-cat-attribute-small.webp" class="rounded-xl mt-4" />

Source: [developer.mozilla.org: Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_element), [developer.mozilla.org: Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_element)

</div>
<div v-click>

**An attribute should have:**

- A space between it and the element name.
- The attribute name, followed by an equal sign.
- An attribute value, wrapped with opening and closing quote marks.

</div>
<div v-click>

**Non-exhaustive list of attributes:**

- class, id, name, type, aria-\*, data-\*

</div>

---

## Starting with some HTML

<div class="flex flex-col gap-2 mt-4">

<div v-click>
```html
<h1>This is a red title</h1>
<p>This is a blue text.</p>
```
</div>

<div v-click class="p-4 bg-white rounded-xl">
    <img src="/images/starting-with-some-html.webp" class="max-h-[8rem]" />
</div>

</div>

<div v-click class="absolute bottom-10 flex items-center left-1/2 transform -translate-x-1/2">
<img src="/images/clippy.webp" class="max-h-[8rem]" />

<div>

> This is ugly. How am I going to add style?

</div>

</div>

---

## How CSS works

<div v-click>
<img src="/images/rendering.svg" class="rounded-xl bg-white" />

Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)

</div>

---

## What is the DOM?

<v-click>

> The DOM (<span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Document Object Model</span>) is an API that <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">represents and interacts with any HTML or XML-based markup language document</span>. The DOM is a document model loaded in the browser and <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">representing the document as a node tree</span>, or DOM tree, where each node represents part of the document (e.g. an element, text string, or comment).

Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Glossary/DOM)

</v-click>

<v-click>

<p>A real representation</p>

</v-click>

<div class="flex gap-2">
<div class="flex flex-col gap-2 w-1/2">
<v-click>

```html
<body>
  <h1>This is a red title</h1>
  <p>This is a blue text.</p>
</body>
```

</v-click>

</div>
<div class="flex flex-col gap-2 w-1/2">
<v-click>

```text
BODY
├── H1
│   └── "This is a red title"
└── P
    └── "This is a blue text."
```

</v-click>

</div>
</div>

---

## Anatomy of a CSS ruleset

<div class="flex gap-2 mt-4">

<div class="flex flex-col gap-2 w-1/2">

<div v-click>
<img src="/images/css-declaration-small.webp" class="rounded-xl" />

Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#anatomy_of_a_css_ruleset)

</div>

<div v-click>

Non-exhaustive list of properties:
`font-size`, `color`, `background-color`, `padding`, `margin`, `border`, `border-radius`, `font-family`, [...]

</div>

</div>

<div v-click class="flex flex-col gap-2 w-1/2">

Non-exhaustive list of selectors:

<div class="text-xs">

| Name         | Selector                   | selects                                        |
| ------------ | -------------------------- | ---------------------------------------------- |
| element      | **p**                      | `<p>`                                          |
| id           | **#my-id**                 | `<element id="my-id">`                         |
| class        | **.my-class**              | `<element class="my-class">`                   |
| attribute    | **[data-color-mode=dark]** | `<element data-color-mode="dark">`             |
| pseudo-class | **a:hover**                | `<a>` only when mouse pointer is over the link |

</div>

</div>

</div>

---

## Styling HTML elements

<div class="flex gap-2 mt-4">

<div class="flex flex-col gap-2 w-1/2">

<div v-click>

```html
<h1>This is a red title</h1>
<p>This is a blue text.</p>
```

</div>

<div v-click>

```css
h1 {
  color: red;
  font-size: 2.5rem;
  line-height: 1;
}

p {
  color: blue;
}
```

</div>

</div>

<div v-click class="p-4 bg-white rounded-xl w-1/2">
    <img src="/images/styling-html-elements.webp" class="max-h-[10rem]" />
</div>

</div>

<div v-click class="absolute bottom-10 gap-2 flex items-center left-1/2 transform -translate-x-1/2">

<img src="/images/navi.webp" alt="by polarstar" class="max-h-[6rem] rounded-xl scale-x-[-1]" />

> Where can I write this CSS?

</div>

---

## How to load CSS?

<div class="flex gap-2">
<div v-click class="flex flex-col w-1/2 gap-2">

```html
<head>
  <style>
    h1 {
      color: red;
      font-size: 5rem;
      line-height: 1;
    }

    p {
      color: blue;
    }
  </style>
</head>
```

</div>
<div v-click class="flex flex-col w-1/2 gap-2">

```css
/* main.css */
h1 {
  color: red;
  font-size: 5rem;
  line-height: 1;
}

p {
  color: blue;
}
```

```html
<head>
  <link href="main.css" rel="stylesheet" />
</head>
```

</div>
</div>

<div v-click class="absolute bottom-10 gap-2 flex items-center left-1/2 transform -translate-x-1/2">

> Hmmm! How am I going to add style to an entire website? 🤨🧐🤔

<img src="/images/thinking-guy.webp" class="max-h-[6rem] rounded-xl" />

</div>

---

```yaml
title: HTML, CSS & JS framework
level: 1
```

<h2 class="flex gap-2"><span>HTML, CSS & JS framework:</span><img src="/images/bootstrap-logo-shadow.webp" class="h-9" /><span>Bootstrap</span></h2>

<div v-click>

> Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

Source: [getbootstrap.com](https://getbootstrap.com/docs/3.3/) - Bootstrap v3.3 (2014)

</div>
<div v-click class="flex gap-2">
<div class="flex flex-col gap-2 w-1/2">
<img src="/images/bootstrap-buttons-options.webp" class="rounded-xl" />
<img src="/images/bootstrap-forms.webp" class="rounded-xl" />
</div>

<div class="flex flex-col gap-2 w-1/2">
<div class="flex gap-2">
<div class="flex flex-col gap-2 w-1/2">
<img src="/images/bootstrap-helper-classes.webp" class="rounded-xl" />
</div>
<div class="flex flex-col gap-2 w-1/2">
<img src="/images/bootstrap-buttons-sizes.webp" class="rounded-xl" />
</div>
</div>

<img src="/images/bootstrap-images.webp" class="rounded-xl" />
</div>
</div>

<video v-click loop autoplay class="absolute left-1/4 bottom-12 max-h-[7rem] z-1">
  <source src="/videos/wow.mp4" type="video/mp4">
</video>

---

## How to use Bootstrap?

<div class="flex flex-col gap-2 text-sm"> 
<v-click>

- Download Bootstrap `.css` files **OR** use a [CDN (content delivery/distribution network)](https://en.wikipedia.org/wiki/Content_delivery_network)

</v-click>

<v-click>

```html
<head>
  <!-- Local Bootstrap CSS file -->
  <link href="/css/bootstrap.css" rel="stylesheet" />
  <!-- OR using a CDN -->
  <link
    crossorigin="anonymous"
    href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    rel="stylesheet"
  />
  <!-- custom local CSS file -->
  <link href="/css/main.css" rel="stylesheet" />
</head>
```

</v-click>
<v-click>

```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
```

</v-click>
</div>

---

## How to customize Bootstrap?

<p class="text-sm text-slate-300 !m-0 !mb-1">* using Bootstrap v3.3 back in 2014</p>

<div v-click>

- Use [LESS](https://lesscss.org/) (built with) - (🤔 _what is it?_)
- Use [Sass](https://sass-lang.com/) (official port) - (🤔 _what is it?_)
- CSS Cascade - default behavior (_may not be officially recommended_)

<p class="text-sm ml-2 !mt-1">Source: <a href="https://getbootstrap.com/docs/3.3/">getbootstrap.com</a> - Bootstrap v3.3 (2014)</p>
</div>

<div v-click class="absolute bottom-12 gap-2 flex items-center left-1/2 transform -translate-x-1/2">

<img src="/images/hmmm.webp" class="max-h-[6rem] rounded-2xl" />

> CSS Cascade, you said ?

</div>

---

## CSS Cascade algorithm

<v-click>

> The cascade is the algorithm for <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">solving conflicts where multiple CSS rules</span> apply to an HTML element. The cascade algorithm is split into <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">5 distinct stages</span>.

Source: [web.dev](https://web.dev/learn/css/the-cascade), [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)

</v-click>

<div class="text-sm">
<v-click>

1. <span class="underline underline-2 underline-offset-2 underline-yellow-500 font-bold">Position and order of appearance</span>

</v-click>

<v-click>

2. <span class="underline underline-2 underline-offset-2 underline-amber-500 font-bold">Specificity</span>: an algorithm which determines which CSS selector has the strongest match

</v-click>
<v-click>

3. <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Cascade layers</span>: layered style **<** unlayered style **<** `!important` unlayered style **<** `!important` layered style

</v-click>
<v-click>

4. <span class="flex gap-2"><span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">Origin</span>:<img src="/images/css-cascade-origin.svg" alt="css cascade origin" class="max-h-[12rem]"></span>

<img v-click src="/images/important-rule.jpg" alt="what is this important rule" class="absolute bottom-26 right-20 max-h-[8rem] rounded-xl" />

</v-click>
<v-click>

5. <span class="underline underline-2 underline-offset-2 underline-rose-500 font-bold">Importance</span>: normal rule (e.g., `color`) **<** `animation` rule **<** `!important` rule **<** `transition` rule

<p class="!my-0 !text-sm text-end">Source: <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers">developer.mozilla.org</a>. Nice blog: <a href="https://2019.wattenberger.com/blog/css-cascade">2019.wattenberger.co</a>.</p>

</v-click>

</div>

---

## CSS Specificity

<div class="flex gap-2">
<div v-click class="flex flex-col items-center w-1/2">
<img src="/images/specificity-calculationbase-rhrovi.webp" class="max-h-[14rem] rounded-xl" />

<p>Source: <a href="https://css-tricks.com/specifics-on-css-specificity/">css-tricks.com</a></p>
</div>

<div v-click class="flex flex-col w-1/2">

- When selectors have an <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">equal</span> specificity value, the <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">latest</span> rule is the one that counts.
- When selectors have an <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">unequal</span> specificity value, the <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">more specific</span> rule is the one that counts.
- `!important` <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">always</span> win, only way to bypass is another `!important` <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">declared later</span>

<p class="text-sm !mt-1">Source: <a href="https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/">smashingmagazine.com</a></p>

</div>

</div>

---

## Specificity examples

<div v-click>

```css
/* (0,0,1,1,1) */
#myElement input.myClass {
  color: red;
}
/* (0,0,0,2,1) */
[id='myElement'] input.myClass {
  color: yellow;
}
/* (0,0,0,2,1) */
input[type='password']:required {
  color: blue;
}
/* (0,0,0,0,4) */
html body main input {
  color: green;
}
```

</div>

---

## How to override Bootstrap using CSS Specificity?

<div v-click>

`main.css`

```css
html {
  position: relative;
  min-height: 100%;
}

.navbar-default {
  background-color: #eee;
  border-color: #eee;
}

.btn {
  transition: all ease-in-out 0.2s;
}
```

</div>

---

## End of 2 years IT university diploma 👨🏻‍🎓

<div v-click>

- Graduation 🎉

</div>
<div v-click>

- Learn so far: HTML, <span class="underline underline-2 underline-offset-2 underline-teal-500 font-bold">CSS</span>, JavaScript, <span class="underline underline-2 underline-offset-2 underline-indigo-500 font-bold">Bootstrap</span>, jQuery<span class="text-red-500">\*</span>

</div>

<p v-click class="flex text-xl items-center font-semibold h-12">Next 👨🏻‍🎓 ?</p>

<div v-click class="flex items-center font-semibold w-1/2"><p class="p-4 border-2 border-purple-600 rounded-2xl text-lg text-center">3 years engineering IT work-study program:<br>Single Page Application<span class="text-red-500">*</span>, Angular<span class="text-red-500">*</span>, Angular Material, <span class="underline underline-2 underline-offset-2 underline-blue-500 font-bold">Material Design</span>, <span class="underline underline-2 underline-offset-2 underline-pink-500 font-bold">Sass</span></p></div>

<p v-click class="text-sm text-slate-300 !m-0 !mb-1 w-1/2"><span class="text-red-500">*</span> will not be addressed, see more at: <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">developer.mozilla.org/SPA</a>, <a href="https://api.jquery.com/">api.jquery.com</a> & <a href="https://v7.angular.io/docs">v7.angular.io/docs</a></p>

<img v-click src="/images/dragon1.jpeg" class="absolute bottom-[4rem] left-2/3 transform -translate-x-1/3 max-h-[20rem] rounded-xl" />

---

<h2 class="flex gap-2"><img src="/images/google-material-design-logo.svg" class="h-9" /><span>Material Design</span></h2>

<div v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Material Design</span> […] is a <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">design language</span> developed by Google in 2014. […], Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.

Source: [wikipedia.org/Material_Design](https://en.wikipedia.org/wiki/Material_Design)

</div>

<div v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Material Design</span> is a <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">design system</span> built and supported by Google designers and developers. Material.io includes in-depth <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">UX guidance and UI component implementations</span> for Android, Flutter, and the Web.

Source: [m3.material.io](https://m3.material.io/get-started)

</div>

<div v-click>

> A <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">design language</span> or design vocabulary is an overarching scheme or style that guides the design of a complement of products or architectural settings, creating a coherent <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">design system</span> for styling.

Source: [wikipedia.org/Design_language](https://en.wikipedia.org/wiki/Design_language)

</div>

<div v-click>

> A <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Design system</span> is a collection of <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">reusable components and clear standards</span> that can be assembled together to build any number of applications.

Source: [InVision](https://www.invisionapp.com/inside-design/guide-to-design-systems/)

</div>

---

## What does Material Design look like?

<div class="flex gap-2">
<div v-click class="flex flex-col">

<img src="/images/material-design-m2.webp" class="max-h-[26rem] rounded-xl" />

Source: [m2.material.io](https://m2.material.io/design/introduction#components) - Angular Material v2

</div>

<div v-click class="flex flex-col">

<img src="/images/material-you-light.webp" class="max-h-[26rem] rounded-xl" />

Source: [wikipedia.org/Material_Design](https://en.wikipedia.org/wiki/Material_Design) - Angular Material v3

</div>
</div>

---

<h2 class="flex gap-2"><span>M2</span><img src="/images/street-fighter-vs-logo.webp" class="h-9" /><span>M3</span></h2>

<div class="flex gap-4">
<div v-click class="flex flex-col justify-center items-center">

<img src="/images/material-design-2.svg" class="max-w-[24rem] rounded-xl" />

<p class="!ml-0">Source: <a href="https://en.wikipedia.org/wiki/Material_Design">wikipedia.org/Material_Design</a> - M2</p>

</div>
<div v-click class="flex flex-col items-center">

<img src="/images/material-design-3.svg" class="max-w-[24rem] rounded-xl" />

<p class="!ml-0">Source: <a href="https://en.wikipedia.org/wiki/Material_Design">wikipedia.org/Material_Design</a> - M3</p>

</div>
</div>

---

<h2 class="flex gap-2"><span>How to add theme to </span><img src="/images/angular-material-logo.svg" class="h-9" /><span> Angular Material?</span></h2>

<div v-click>

> <span class="underline underline-2 underline-offset-2 underline-amber-500 font-bold">Angular Material</span>'s theming APIs are built with <span class="underline underline-2 underline-offset-2 underline-pink-500 font-bold">Sass</span>. This document assumes familiarity with <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">CSS and Sass</span> basics, including <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">variables, functions, and mixins</span>.
> <br>You can use Angular Material without Sass by using a pre-built theme, described in Using a pre-built theme below. However, using the library's Sass API directly gives you the most control over the styles in your application.

Source: [material.angular.io](https://material.angular.io/guide/theming#sass)

</div>

---

# CSS preprocessor

<div v-click>

> A <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">CSS preprocessor</span> is a program that lets you <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">generate CSS</span> from the <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">preprocessor's own unique syntax</span>.

Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)

</div>
<br>
<div v-click>

A few of most popular CSS preprocessors:

- [Sass](https://sass-lang.com/)
- [LESS](https://lesscss.org/)
- [Stylus](https://stylus-lang.com/)
- [PostCSS](https://postcss.org/)
</div>

---

<h2 class="flex gap-2"><img src="/images/sass.webp" class="h-9" /><span>Sass</span></h2>

<div v-click>

> CSS on its own can be fun, but <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">stylesheets are getting larger, more complex, and harder to maintain</span>. This is where a preprocessor can help. <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">Sass has features that don’t exist in CSS yet</span> like <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">nesting, mixins, inheritance, and other</span> nifty goodies that help you write <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">robust, maintainable CSS</span>.

Source: [sass-lang.com](https://sass-lang.com/guide/#preprocessing)

</div>

<div v-click>

### How to use?

<div class="flex gap-2 items-center">

**CLI:**

```sh {lines: false}
sass --watch input.scss output.css
```

OR

```sh {lines: false}
sass --watch input.sass output.css
```

</div>

</div>

<div v-click class="mt-4">

> 💡 Fun fact: Sass has two syntaxes!

</div>

---

<h3 class="flex gap-2"><span>Sass syntax: SCSS</span><img src="/images/street-fighter-vs-logo.webp" class="h-9" /><span>The Indented Syntax</span></h3>

<div class="flex gap-2 mt-2">

<div v-click class="flex flex-col w-1/2 gap-2">

```scss
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  /* […] */
  height: $button-height;
  /* […] */

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```

> The SCSS syntax (`.scss`) is used most commonly. It’s a <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">superset of CSS</span> [...].

</div>

<div v-click class="flex flex-col w-1/2 gap-2">

```sass
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  /* […] */
  height: $button-height
  /* […] */

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```

<div>

> The indented syntax (`.sass`) is more unusual: it uses indentation rather than curly braces to nest statements, and newlines instead of semicolons to separate them.

Source: [sass-lang.com](https://sass-lang.com/documentation/syntax)

</div>

</div>

</div>

---

### Sass variables, partials, modules

<div class="flex gap-2 mt-2">
<div class="flex flex-col gap-2 w-1/2">

<v-click>

```scss {all|1|2-3|6-7|all}
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

</v-click>
<v-click>

```scss {all|2|5|all}
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

</v-click>

</div>
<div v-click class="flex flex-col w-1/2">

```css
body {
  font:
    100% Helvetica,
    sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
```

**Other features**: extend/inheritance, operators, functions, at-rules (if, each, for), lists, maps.

<p class="text-sm !mt-1">Source: <a href="https://sass-lang.com/guide/">sass-lang.com/guide</a>, <a href="https://sass-lang.com/documentation/">sass-lang.com/documentation</a></p>

</div>
</div>

---

## Angular Material theme example

<div v-click>

```scss
// whatever.scss
@import '~@angular/material/theming';

@include mat-core();

$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent: mat-palette($mat-pink, A200, A100, A400);

$candy-app-warn: mat-palette($mat-red);

$candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn);

@include angular-material-theme($candy-app-theme);
```

Source: [v7.material.angular.io](https://v7.material.angular.io/guide/theming)

</div>

---

## Angular Material usage

<div v-click>

`component.html`

```html
<button mat-raised-button>Basic</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled>Disabled</button>
<a mat-raised-button routerLink=".">Link</a>
```

</div>
<div v-click>

<img src="/images/angular-material-v7-buttons-raised.webp" class="mt-4 rounded-xl" />

Source: [v7.material.angular.io](https://v7.material.angular.io/components/button/examples)

</div>

---

## End of studies 👨🏻‍🎓 & start of working life 👨🏻‍💻

<v-click>

- Graduation 🎉

</v-click>
<v-click>

- Angular (Material Design) + me = ❤️

</v-click>

<img v-click src="/images/dragon2.jpg" class="absolute bottom-[4rem] left-1/2 transform -translate-x-1/2 max-h-[20rem] rounded-xl" />

---

## Angular MDC

<p class="text-sm text-slate-300 !m-0">* another Material Design implementation for Angular (!== Angular Material)</p>

<div v-click="1" class="flex flex-col items-start">

Example usage:

```html {all|all|1|3|7|all}
<aside class="mdc-snackbar">
  <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
    <div class="mdc-snackbar__label" aria-atomic="false">Can't send photo. Retry in 5 seconds.</div>
    <div class="mdc-snackbar__actions" aria-atomic="true">
      <button type="button" class="mdc-button mdc-snackbar__action">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Retry</span>
      </button>
    </div>
  </div>
</aside>
```

<img src="/images/snackbar.webp" alt="snackbar" class="max-h-[2rem] rounded-md mt-2">

<p class="text-sm ml-2 !mt-1">Source: <a href="https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md">github.com/material-components</a></p>

</div>

---

<h2 class="flex gap-2"><img src="/images/getbem.webp" class="h-9" /><span>Block Element Modifier (BEM)</span></h2>

<v-click>

> The <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Block, Element, Modifier</span> methodology (commonly referred to as BEM) is a popular <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">naming convention for classes</span> in HTML and CSS. […], its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

Source: [css-tricks.com](https://css-tricks.com/bem-101/)

</v-click>
<div v-click class="flex gap-2 items-center">

Syntax:

```html {lines:false}
block__element--modifier
```

</div>

<v-click>

- **Block**: `header`, `container`, `menu`, `checkbox`, `input`, `card`, `button`, …
- **Element**: `title`, `item`, `caption`, `icon`
- **Modifier**: `disabled`, `highlighted`, `checked`, `size`, `color`

<p class="text-sm !mt-1">Source: <a href="https://getbem.com/introduction/">getbem.com</a></p>

</v-click>

---

## An example using BEM

<div v-click class="flex flex-col gap-2">

<p class="!my-0"><code>index.html</code></p>

```html
<button class="button"><span class="button__label">Normal button</span></button>
<button class="button button--success button--large">
  <span class="button__icon"></span><span class="button__label">Success button</span>
</button>
<button class="button button--danger button--outlined">Danger button</button>
```

</div>

<div class="flex gap-2">

<div v-click class="flex flex-col gap-2 w-1/2">

<p class="!mb-0"><code>main.css</code></p>

```css
.button {
  /* […] */
}

.button__label {
  /* […] */
}

.button--success {
  /* […] */
}
```

</div >

<div v-click class="flex flex-col gap-2 w-1/2">

<p class="!mb-0"><code>main.scss</code></p>

```scss
.button {
  /* […] */

  &__label {
    /* […] */
  }

  &--success {
    /* […] */
  }
}
```

</div>
</div>

---

## ✅ Pros & ❌ cons of using BEM

<div class="flex gap-2">

<div class="flex flex-col gap-2 w-1/2">

<v-click>

- <span class="underline underline-2 underline-offset-2 underline-green-500 font-bold">Modularity</span>:
  - never dependent on other elements (no cascading problem)
  - transfer blocks

</v-click>
<v-click>

- <span class="underline underline-2 underline-offset-2 underline-green-500 font-bold">Reusability</span>:
  - reduces the amount of CSS code to maintain
  - you can build a library of blocks

</v-click>
<v-click>

- <span class="underline underline-2 underline-offset-2 underline-green-500 font-bold">Structure</span>:
  - simple and easy to understand

</v-click>

<p v-click class="text-sm !mt-1">Source: <a href="https://getbem.com/introduction/">getbem.com</a></p>

</div>

<div class="flex flex-col gap-2 w-1/2">

<v-click>

- <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">Bundle</span>:
  - without minifying/gzipping can bloat CSS files size

</v-click>

</div>

</div>

---

## Keep on learning 📚

<p v-click class="font-semibold underline underline-2 underline-offset-2 underline-purple-500">So far I know (or I thought I know):</p>

<v-click>

- how to write CSS

</v-click>
<v-click>

- how to write Sass & use BEM

</v-click>
<v-click>

- use a CSS Framework (Bootstrap)

</v-click>
<v-click>

- use a Design System (Material Design)

</v-click>

<p v-click class="flex text-2xl items-center grow justify-center font-semibold h-12">Next step 🚀 ?</p>

<div v-click class="flex text-3xl items-center justify-center font-bold h-20"><p class="flex p-4 border-2 border-red-600 rounded-full">How to create a design system ?</p></div>

---

## Atomic design

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Atomic design</span> is methodology for creating <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">design systems</span>. There are five distinct levels in atomic design: <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">atoms, molecules, organisms, templates, pages</span>.

Source: [bradfrost.com](https://bradfrost.com/blog/post/atomic-web-design/)

</v-click>

<img v-click src="/images/atomic-design.webp" alt="atomic design" class="rounded-2xl">

---

### Atomic design: atoms

<div class="flex gap-4 mt-4">
<div v-click class="flex w-1/2 flex-col">

> <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Atoms</span> are the <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">basic building blocks</span> of matter. Applied to web interfaces, atoms are our HTML tags, such as <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">a form label, an input or a button</span>.

Source: [bradfrost.com](https://bradfrost.com/blog/post/atomic-web-design/)

</div>

<img v-click src="/images/atomic-design-atoms.jpg" alt="atoms" class="flex rounded-2xl w-1/2">
</div>

---

### Atomic design: molecules

<div class="flex gap-4 mt-4">
<div v-click class="flex w-1/2 flex-col">

> <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Molecules</span> are <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">groups of atoms</span> bonded together and are the <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">smallest fundamental units</span> of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

Source: [bradfrost.com](https://bradfrost.com/blog/post/atomic-web-design/)

</div>

<img v-click src="/images/atomic-design-molecule.jpg" alt="molecule" class="flex rounded-2xl w-1/2">
</div>

---

### Atomic design: organisms

<div class="flex flex-col gap-4 mt-4">
<div v-click class="flex flex-col">

> <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Organisms</span> are <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">groups of molecules</span> joined together to form a relatively complex, distinct section of an interface.

Source: [bradfrost.com](https://bradfrost.com/blog/post/atomic-web-design/)

</div>

<img v-click src="/images/atomic-design-organism.jpg" alt="organism" class="flex rounded-2xl">
</div>

---

### Atomic design: templates

<div class="flex gap-4 mt-4">
<div v-click class="flex flex-col">

> <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Templates</span> consist mostly of <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">groups of organisms</span> stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

Source: [bradfrost.com](https://bradfrost.com/blog/post/atomic-web-design/)

</div>

<img v-click src="/images/atomic-design-template.jpg" alt="template" class="flex rounded-2xl max-w-[34rem]">
</div>

---

### Atomic design: pages

<div class="flex gap-4 mt-4">
<div v-click class="flex flex-col">

> <span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">Pages</span> are <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">specific instances of templates</span>. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

Source: [bradfrost.com](https://bradfrost.com/blog/post/atomic-web-design/)

</div>

<img v-click src="/images/atomic-design-page.jpg" alt="page" class="flex rounded-2xl max-w-[34rem]">
</div>

---

```yaml
layout: cover
hideInToc: true
```

# Pause ☕

<img src="/images/pause.svg" alt="pause" class="absolute top-1/2 transform -translate-y-1/2 right-16 max-h-[26rem]">

---

<h2 class="flex gap-2"><span>New opportunities at </span><img src="/images/upciti-web-white.webp" class="h-9" /></h2>

<v-click>

- 09/2014 - 01/2022: CSS, Bootstrap, Material Design, Sass, BEM, Atomic design

</v-click>

<v-click>

- UPCITI: utility-first CSS framework <span class="underline underline-2 underline-offset-2 underline-teal-500 font-bold">tailwindcss</span>, dark mode, theme configuration, CSS variables, <span class="underline underline-2 underline-offset-2 underline-amber-500 font-bold">CSS-in-JS</span>, CSS layers

</v-click>

<img v-click src="/images/dragon3.jpg" class="absolute bottom-[2.5rem] left-1/2 transform mb-2 -translate-x-1/2 max-h-[20rem] rounded-xl" />

---

```yaml
title: Utility-first CSS framework
level: 1
```

<h2 class="flex gap-2"><span>Utility-first CSS framework:</span><img src="/images/tailwindcss.svg" class="h-9" /><span>tailwindcss</span></h2>

<img v-click src="/images/tailwindcss-example.webp" alt="tailwindcss example" class="flex rounded-2xl m-auto max-w-[30rem]">

<div v-click class="flex gap-2 flex-col">

<p class="!my-0">Traditional approach:</p>

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>
```

<div class="flex gap-2"> 
<div class="w-1/2">

```css
.chat-notification {
  /* […] */
}
```

</div>

<p class="w-1/2 text-sm !mt-0">Source: <a href="https://tailwindcss.com/docs/utility-first">tailwindcss.com</a></p>
</div>

</div>

---

<h2 class="flex gap-2"><span>Utility-first CSS framework:</span><img src="/images/tailwindcss.svg" class="h-9" /><span>tailwindcss</span></h2>

<img src="/images/tailwindcss-example.webp" alt="tailwindcss example" class="flex rounded-2xl m-auto max-w-[30rem]">

<div v-click class="flex gap-2 flex-col">

<p class="!my-0">Utility classes approach:</p>

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

<p class="text-sm ml-2 !mt-0">Source: <a href="https://tailwindcss.com/docs/utility-first">tailwindcss.com</a></p>

</div>

---

## How to use tailwindcss?

<div class="flex flex-col gap-2"> 
<div v-click class="flex">

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  /* […] */
  content: ['./src/**/*.{html,js,ts,vue}'],
  /* […] */
};
```

</div>

<div v-click class="flex">

```scss
// index.scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</div>

<v-click>

- Build your CSS using CLI / bundler

</v-click>
<v-click>

- Import SCSS / CSS in HTML / TS

</v-click>

<v-click>
<p class="w-1/2 text-sm !mt-0">Source: <a href="https://tailwindcss.com/docs/installation">tailwindcss.com</a></p>
</v-click>

</div>

---

<h2 class="flex gap-2 items-end"><span>A unique theme</span><span class="text-xs text-slate-300 italic">(to rule them all?)</span><span>: 🎨 multi-palettes</span></h2>

<div class="flex gap-2">

<div class="flex">
<v-click>

```js {all|9|all}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  /* […] */
  theme: {
    extend: {
      colors: {
        primary: {
          900: 'var(--color-primary-900)',
          // 800, 700, 600, 500, 400, 300, 200, 100, 50
        },
      },
    },
  },
};
```

</v-click>
</div>

<div class="flex">
<v-click>

```scss
// index.scss
.palette-a {
  --color-primary-900: #881337;
  /* […] */
}

.palette-b {
  --color-primary-900: #0c4a6e;
  /* […] */
}

.palette-c {
  --color-primary-900: #064e3b;
  /* […] */
}
```

</v-click>

</div>
</div>
<v-click>
<p class="text-sm ml-2">Source: <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables">tailwindcss.com</a></p>
</v-click>

---

## CSS variables or custom properties

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Custom properties</span> (sometimes referred to as <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">CSS variables</span> or cascading variables) are entities defined by CSS authors that represent <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">specific values to be reused</span> throughout a document.

Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

</v-click>

<v-click>
  <p class="!my-0">How to declare?</p>
</v-click>

<div class="flex gap-2 mt-2">

<div v-click class="flex flex-col gap-2 w-1/2">

```css
/* @property at-rule */
@property --logo-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

</div>
<div v-click class="flex flex-col gap-2 w-1/2">

```css
/* prefix of two dashes (--) */
section {
  --logo-color: #c0ffee;
}
```

</div>
</div>

<div class="flex gap-2 mt-4">
<div v-click class="flex flex-col gap-2 w-1/2">

<p class="!my-0">How to use?</p>

```css
details {
  color: var(--logo-color, #c0ffee);
}
```

</div>
<div v-click class="flex flex-col w-1/2">

<p class="!my-0">Other features:</p>

- `:root` pseudo-class
- inheritance
- fallback values

</div>

</div>

---

## Component using tailwindcss classes

<v-click>

```vue
<!-- ButtonPrimary.vue -->
<template>
  <button
    type="button"
    :class="[
      'relative inline-flex items-center rounded-lg border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'border-transparent bg-primary-900 text-base-50 hover:bg-primary-800 focus:ring-primary-800 dark:border-transparent dark:bg-base-600 dark:text-base-200 dark:hover:bg-base-500 dark:focus:ring-base-200 dark:focus:ring-offset-base-700',
      'px-4 py-2',
    ]"
  ></button>
</template>
```

</v-click>
<div v-click class="mt-4">

<p class="!mt-0 !mb-2 font-semibold">⚠️ Maintainability:</p>

- How to share button common classes?
- It's not typed-safe (using TypeScript)
- HTML class size bloat

</div>

---

## 💡 Some ideas to begin with…

<v-click>

Use JavaScript object to share classes:

```javascript
export const colors = {
  button: {
    common: 'relative inline-flex items-center rounded-lg border text-sm font-bold focus:outline-none […]',
    spacing: 'px-4 py-2',
    disabled: 'disabled:cursor-not-allowed disabled:opacity-50',
    // […]
  },
};
```

</v-click>
<v-click>

But still:

```vue
<!-- ButtonPrimary.vue -->
<template>
  <button
    type="button"
    :class="[colors.button.common, colors.button.disabled, colors.button.primary, colors.button.spacing]"
  ></button>
</template>
```

</v-click>

---

## A persistent problem 🤔

<v-click>

- I need to create one Vue component per variant (button example: _primary, secondary, outlined, success, warning, info, error_)

</v-click>
<v-click>

- How to split set of classes for a component ? (_like modifiers?_)

</v-click>
<v-click>

- Same issues with [headlessui](https://headlessui.com/) (_unstyled, fully accessible UI components_)

</v-click>

<br>
<v-click>
  <h2 class="flex gap-2"><span>Until …</span><img src="/images/vuejs.svg" class="h-9" /><span><a href="https://www.meetup.com/vuejs-paris/">Vue.js Paris🇲🇫 #24</a></span></h2>
</v-click>
<v-click>
  <span class="flex items-center gap-2 text-2xl font-semibold justify-center py-4">Presentation of a <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">CSS-in-JS</span> tool: <a href="https://pinceau.dev/">Pinceau</a> <img src="/images/pinceau.svg" class="h-12" /></span>
</v-click>

---

# CSS-in-JS

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">CSS-in-JS</span> is a styling technique by which JavaScript is used to <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">style components</span>. When this JavaScript is parsed, CSS is generated (usually as a `<style>` element) and attached into the DOM. It enables the <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">abstraction of CSS to the component level</span> itself, using JavaScript to <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">describe styles in a declarative and maintainable way</span>.

Source: [en.wikipedia.org](https://en.wikipedia.org/wiki/CSS-in-JS)

</v-click>

<div class="flex gap-2">
<div class="flex flex-col w-1/4 text-sm">
<div v-click>

<div class="p-1 border border-slate-600 rounded-xl flex flex-col w-full gap-2">
<span><img src="/images/state-of-css-2023.svg" class="h-5" /></span>
<span class="text-xs text-slate-300 !m-0 !mb-1">* State of CSS 2023</span>
<span><span class="font-semibold">Plenty of tools</span>: <span class="underline underline-2 underline-offset-2 underline-yellow-500 font-bold">CSS modules</span>, styled-components, Emotion, Stitches, JSS</span>
<span><span class="font-semibold">Other tools</span>: <span class="underline underline-2 underline-offset-2 underline-yellow-500 font-bold">Panda</span></span>
</div>

<p class="text-sm ml-2 !mt-1">Source: <a href="https://2023.stateofcss.com/en-US/css-in-js/">2023.stateofcss.com</a></p>
</div>
<p class="text-xs !mt-0" v-click><span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">Note</span>: Meta open-sourced its CSS-in-JS tool early in December 2023: <a href="https://stylexjs.com/">stylex</a>.</p>

</div>
<div class="flex flex-col gap-2 w-3/4">
<img v-click src="/images/state-of-css-2023-css-in-js.webp" alt="state of css 2023 css-in-js" class="rounded-xl absolute max-h-[19rem] bottom-14">
</div>

</div>

---

## CSS modules

<v-click>

> A <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">CSS Module</span> is a <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">CSS file</span> in which all <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">class names and animation names are scoped locally by default</span>.

<p class="!mb-2">Source: <a href="https://github.com/css-modules/css-modules">github.com/css-modules</a></p>

</v-click>

<div class="flex gap-2">

<div class="flex flex-col gap-2">

<p v-click class="!my-0">Usage with <a href="https://vitejs.dev/guide/features#css-modules">Vite</a>:</p>

<div class="flex gap-2">

<v-click>

```css
/* example.module.css */
.red {
  color: red;
}
```

</v-click>
<v-click>

```javascript
// index.js
// .apply-color -> applyColor
import { red } from './example.module.css';

document.getElementById('foo').className = red;
```

</v-click>

<div v-click class="flex flex-col gap-1 text-sm">
<span>✅ <span class="font-semibold">Pros</span>: no deps, no config, easy to use</span>
<span>❌ <span class="font-semibold">Cons</span>: write (S)CSS, write default theme as global</span>
</div>

</div>

</div>

</div>

<div class="flex gap-2">

<div v-click class="flex flex-col gap-2">

<p class="!my-0">Usage in <a href="https://vuejs.org/api/sfc-css-features.html#css-modules">Vue Single-File Component (SFC)</a>:</p>

```vue
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
.red {
  color: red;
}
</style>
```

</div>

<div v-click class="flex flex-col gap-1 text-sm pt-7">

<p class="!my-0">✅ <span class="font-semibold">Pros</span>:</p>

<ul class="list-inside ml-4">
<li>no deps, no config, easy to use</li>
</ul>

<p class="!my-0">❌ <span class="font-semibold">Cons</span>:</p>

<ul class="list-inside ml-4">
<li>write (S)CSS</li>
<li>write default theme as global</li>
<li>Does not work in <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">Functional Components/render functions</span></li>
</ul>

</div>

</div>

---

## 🐼 Panda

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-yellow-500 font-bold">Panda</span> is a new CSS-in-JS engine that aims to solve the challenges of CSS-in-JS in the server-first era. It provides <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">styling primitives to create, organize, and manage CSS styles</span> in a <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">type-safe and readable manner</span>.

<p class="!mb-2">Source: <a href="https://panda-css.com/docs/overview/why-panda">panda-css.com</a></p>

<img src="/images/panda-bubble-tea.svg" alt="panda bubble tea" class="absolute bottom-12 right-4 max-h-[12rem] z-10">

</v-click>

<p v-click class="!mt-0 !mb-1 !ml-0 !text-lg">How to install?</p>

<div class="flex gap-2">

<div class="flex flex-col gap-2">

<v-click>

```javascript
// panda.config.js
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  presets: [], // <-- import custom preset
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  outdir: 'styled-system',
});
```

</v-click>

<v-click>

```shell
panda codegen
```

</v-click>

</div>

<div class="flex flex-col gap-2">

<v-click>

```css
/* src/index.css */
@layer reset, base, tokens, recipes, utilities;
```

</v-click>
<v-click>

```vue
<!-- src/App.vue -->
<script setup lang="ts">
import { css } from '../styled-system/css';

const classes = css({
  fontSize: '5xl',
  fontWeight: 'bold',
});
</script>

<template>
  <div :class="classes">Hello 🐼!</div>
</template>
```

</v-click>

</div>

</div>

---

## CSS Cascade Layers

<p class="text-sm text-slate-300 !m-0 !mb-1">* c.f. <Link to="22">CSS Cascade algorithm</Link></p>

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Cascade layers</span> are most relevant when you're working with <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">CSS from multiple sources</span> when there are <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">conflicting CSS selectors and competing specificities</span>, or when you're <span class="underline underline-2 underline-offset-2 underline-purple-500 font-bold">considering using !important</span>.

Source: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)

</v-click>

<div class="flex gap-2">
<div v-click class="flex flex-col w-1/2">

```css
/* unlayered author style: specificity is used */
.overly#powerful .framework.widget {
  color: maroon;
}

/* add some IDs to this ??? */
.my-single_class {
  /* add !important ??? */
  color: rebeccapurple;
}
```

<p class="text-sm ml-2 !mt-1">Source: <a href="https://css-tricks.com/css-cascade-layers/">css-tricks.com</a></p>

</div>
<div v-click class="flex flex-col w-1/2 gap-2">

```css
@layer framework {
  .overly#powerful .framework.widget {
    color: maroon;
  }
}

@layer site {
  .my-single_class {
    color: rebeccapurple;
  }
}
```

</div>
</div>

<p v-click class="text-sm"><span class="font-semibold">Other features</span>: nested layers, anonymous layers, import styles based on conditions (media/feature queries), etc.</p>

---

## Design Tokens

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Design tokens</span> are a methodology for <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">expressing design decisions</span> in a <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">platform-agnostic way</span> so that they can be shared across different disciplines, tools, and technologies. They help establish a common vocabulary across organisations.

Source: [Design Tokens Format Module from W3C](https://tr.designtokens.org/format/)

</v-click>
<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Design tokens</span> are the <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">platform-agnostic way</span> to manage design decisions in your application or website. It is a collection of attributes that <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">describe any fundamental/atomic visual style</span>. Each attribute is a key-value pair.

Source: [panda-css.com](https://panda-css.com/docs/theming/tokens)

</v-click>

---

## Tokens in panda

<div class="flex gap-2">
<div class="flex flex-col gap-2 w-1/2">

<v-click>

```javascript
/* panda.config.js */
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  theme: {
    // 👇🏻 Define your tokens here
    tokens: {
      colors: {
        primary: { value: '#0FEE0F' },
        secondary: { value: '#EE0F0F' },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
      },
    },
  },
});
```

</v-click>

</div>
<div class="flex flex-col w-1/2">

<v-click>

```vue
<!-- HelloWorld.vue -->
<template>
  <p :class="classes">Hello World</p>
</template>

<script setup lang="ts">
import { css } from '../styled-system/css';

const classes = css({
  color: 'primary',
  fontFamily: 'body',
});
</script>
```

<p class="text-sm ml-2 !mt-1">Source: <a href="https://panda-css.com/docs/theming/tokens">panda-css.com</a></p>

</v-click>

</div>

</div>

---

## What is a preset

> By default, <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">any configuration you add</span> in your own `panda.config.js` file is <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">smartly merged with the default configuration</span>, <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">allowing your override or extend specific parts of the configuration</span>.

Source: [panda-css.com](https://panda-css.com/docs/customization/presets)

<p v-click class="font-semibold">What does it contain?</p>

<v-click>

- Include base preset

</v-click>
<v-click>

- **Define** colors, breakpoints, tokens (sizes, animations, line-heigths etc.), utilities, fonts, global style, etc.

</v-click>
<v-click>

- **Conditions**: dark / light mode, multiple themes

</v-click>

---

## Custom preset

<div class="flex gap-2">
<div v-click class="flex flex-col w-1/2 gap-2">

```typescript
import { definePreset } from '@pandacss/dev';
import pandaPreset from '@pandacss/preset-panda';

const basePreset = definePreset({
  presets: [pandaPreset],
  theme: {
    extend: {
      breakpoints: {
        xs: '475px',
        '3xl': '1920px',
      },
      tokens: {
        sizes: {
          '8xl': { value: '85rem' },
          '9xl': { value: '90rem' },
        },
      },
    },
  },
});
```

</div>
<div v-click class="flex flex-col w-1/2 gap-2">

```typescript
import { definePreset } from '@pandacss/dev';

export const orgPreset = definePreset({
  presets: [basePreset],
  conditions: {
    light: '',
    dark: '.dark &',
    orgTheme: '.org &',
  },
  theme: {
    extend: {
      /**
       * colors > org > 900 > value
       * fonts > inter > value
       */
      tokens: {},
      semanticTokens: {},
    },
  },
});
```

</div>
</div>

---

## Define multiple theme

<div class="flex gap-2">
<div class="flex flex-col w-1/2 gap-2">

<div v-click="1">

```typescript
const config = {
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    pinkTheme: '[data-theme=pink] &',
    blueTheme: '[data-theme=blue] &',
  },
};
```

</div>

<div v-click="3">

```vue
<template>
  <div data-theme="pink" data-color-mode="dark">
    <h1 :class="classes">Hello World</h1>
  </div>
</template>
<script setup lang="ts">
import { css } from '../styled-system/css';

const classes = css({
  color: 'text',
});
</script>
```

</div>

</div>
<div v-click="2" class="flex flex-col w-1/2">

```typescript
const theme = {
  // ...
  semanticTokens: {
    colors: {
      text: {
        value: {
          _pinkTheme: {
            base: '{colors.pink.500}',
            _dark: '{colors.pink.300}',
          },
          _blueTheme: {
            base: '{colors.blue.500}',
            _dark: '{colors.blue.300}',
          },
        },
      },
    },
  },
};
```

<p class="text-sm ml-2 !mt-1">Source: <a href="https://panda-css.com/docs/guides/multiple-themes">panda-css.com</a></p>

</div>
</div>

---

## 📜 Recipes

<v-click>

> A <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">recipe</span> is a way to <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">write CSS-in-JS with better performance, developer experience, and composability</span>. One of its key features is the ability to <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">create multi-variant styles with a type-safe runtime API</span>.

Source: [panda-css.com](https://panda-css.com/docs/concepts/recipes)

</v-click>

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Atomic recipes</span> are a way to <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">create multi-variant atomic styles</span> with <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">a type-safe runtime API</span>.

Source: [panda-css.com](https://panda-css.com/docs/concepts/recipes)

</v-click>

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Config recipes</span> are <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">extracted and generated just in time</span>, this means regardless of the number of recipes in the config, <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">only the recipes and variants you use will exist in the generated CSS</span>.

Source: [panda-css.com](https://panda-css.com/docs/concepts/recipes)

</v-click>

---

<h2 class="flex gap-2"><span>⚛️ Atomic recipe</span><img src="/images/street-fighter-vs-logo.webp" class="h-9" /><span>⚙️ Config recipe</span></h2>

<div v-click class="text-sm">

|                                                        | **Config recipe**                                                           | **Atomic recipe (cva)**                                                  |
| ------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Can both use any theme tokens, utilities or conditions | ✅ yes                                                                      | ✅ yes                                                                   |
| Are generated just in time (JIT) based on usage        | ✅ yes, only the recipe variants found in your code will be generated       | ❌ no, all variants found in your `cva` recipes will always be generated |
| Can be shared in a preset                              | ✅ yes, you can include it in your `preset.theme.recipes`                   | ❌ no                                                                    |
| Can be colocated in your markup code                   | ❌ no, they must be defined or imported in your `panda.config`              | ✅ yes, you can place it anywhere in your app                            |
| Generate atomic classes                                | ❌ no, a specific className will be generated using your `recipe.className` | ✅ yes                                                                   |

<p class="text-sm ml-2 !mt-1">Source: <a href="https://panda-css.com/docs/concepts/recipes">panda-css.com</a></p>

</div>

---

## Define and use a recipe

<div class="flex gap-2">
<div v-click class="w-1/2 flex flex-col">

```typescript
import { cva } from '../styled-system/css';

const button = cva({
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      solid: { bg: 'red.200', color: 'white' },
      outline: {
        borderWidth: '1px',
        borderColor: 'red.200',
      },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
  },
});
```

<p class="text-sm ml-2 italic">Atomic recipe example</p>

</div>

<div v-click class="w-1/2 flex flex-col">

```vue
<!-- ButtonPrimary.vue -->
<template>
  <button :class="classes"></button>
</template>

<script setup lang="ts">
import { button } from '<path>/button.recipe.ts';

const classes = button({
  visual: 'solid',
  size: 'lg',
});
</script>
```

<p class="text-sm ml-2 !mt-1">Source: <a href="https://panda-css.com/docs/concepts/recipes">panda-css.com</a></p>

</div>

</div>

---

<h2><img src="/images/storybook.svg" class="h-9" /></h2>

<div class="flex gap-2">
<div class="flex grow flex-col">

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-pink-500 font-bold">Storybook</span> is a frontend workshop for <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">building UI components and pages in isolation</span>. Thousands of teams use it for <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">UI development, testing, and documentation</span>.

Source: [storybook.js.org](https://storybook.js.org/)

</v-click>
<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">A documentation tool</span> is a tool for <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">documenting design tokens usage</span>. For example: <span class="underline underline-2 underline-offset-2 underline-pink-500 font-bold">Storybook</span>.

Source: [Design Tokens Format Module from W3C](https://tr.designtokens.org/format/)

</v-click>

</div>

<div v-click class="flex flex-col">
    <video v-click loop autoplay class="-mt-20 max-w-[28rem] w-auto h-auto mr-2">
      <source src="/videos/storybook.webm" type="video/webm">
    </video>
</div>
</div>

---

<v-click>

### Button recipe usage

</v-click>

<div class="flex flex-col gap-2">
<v-click>

```vue
<template>
  <button :class="classes" title="Save" @click="submit">Save</button>
</template>
<script setup lang="ts">
import { button } from '@scope/design-system';

const classes = button({ variant: 'primary', size: 'md' });
</script>
```

</v-click>

</div>

<br>

<v-click>

### Button component usage

</v-click>

<div class="flex flex-col gap-2">
<v-click>

```vue
<template>
  <ButtonComponent visual="primary" size="md" title="Save" @click="submit">Save</ButtonComponent>
  <ButtonComponent visual="error" rounded="none" title="Delete" @click="delete">Delete</ButtonComponent>
</template>
```

</v-click>

<v-click>

```vue
<template>
  <ButtonComponent visual="outline" content="icon" title="Export file to CSV" @click="export">
    <IconComponent class="h-5 w-5" :icon="faFileExport" />
  </ButtonComponent>
</template>
```

</v-click>

</div>

---

## Monorepo structure

<v-click>

> <span class="underline underline-2 underline-offset-2 underline-emerald-500 font-bold">A monorepo</span> is a <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">single repository</span> <span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">containing multiple distinct projects</span>, with well-defined relationships.

Source: [monorepo.tools](https://monorepo.tools/)

</v-click>

<div class="flex gap-2">
<div class="flex flex-col gap-2">

<v-click>

```text
.
└── packages/
    ├── preset-panda/
    ├── design-system/
    │   ├── public/
    │   │   └── fonts/
    │   ├── recipes/
    │   ├── components/
    │   └── stories/
    └── app/
        ├── node_modules/
        │   └── @scope/styled-system
        └── src/
            ├── components/
            └── pages/
```

</v-click>

</div>
<div class="flex flex-col gap-2">

<ul class="list-inside ml-2">
<li v-click>
<span class="text-yellow-500"><Arrow x1="380" y1="190" x2="260" y2="225" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-yellow-500 font-bold">preset-panda</span>: export your base / project / organization specific preset.</span>
</li>
<li v-click>
<span class="text-amber-500"><Arrow x1="380" y1="255" x2="270" y2="245" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-amber-500 font-bold">design-system</span>: export the content you need to use your design system (e.g. static files + recipes + components)</span>
</li>
<li v-click>
<span class="text-orange-500"><Arrow x1="380" y1="320" x2="330" y2="370" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-orange-500 font-bold">@scope/styled-system</span>: generated panda CSS Utilities (such as <code>css</code> function) & types <span class="underline underline-2 underline-offset-2 underline-sky-500 font-bold">based on preset & buildinfo from design-system</span>.</span>
</li>
<li v-click>
<span class="text-red-500"><Arrow x1="380" y1="412" x2="235" y2="405" width="3" /></span>
<span><span class="underline underline-2 underline-offset-2 underline-red-500 font-bold">app/src</span>: contains your custom application pages/components that are specific to your context</span>
</li>
</ul>

</div>

</div>

---

## Summary

<div class="flex flex-col">
<p v-click><span class="text-xl underline underline-2 underline-offset-2 underline-emerald-500 font-bold">Notions</span>: HTML & CSS basics, CSS Specificity, CSS Frameworks, CSS preprocessor, CSS Variables, CSS-in-JS, CSS Cascade Layers</p>
<p v-click><span class="text-xl underline underline-2 underline-offset-2 underline-teal-500 font-bold">Glossary</span>: Design system, Design tokens</p>
<p v-click><span class="text-xl underline underline-2 underline-offset-2 underline-amber-500 font-bold">Methodologies</span>: BEM, Atomic Design</p>
<p v-click><span class="text-xl underline underline-2 underline-offset-2 underline-sky-500 font-bold">CSS frameworks</span>: Bootstrap, Material Components, tailwindcss, panda</p>
<p v-click><span class="text-xl underline underline-2 underline-offset-2 underline-purple-500 font-bold">Tools</span>: Storybook</p>
<p v-click><span class="text-xl underline underline-2 underline-offset-2 underline-red-500 font-bold">What's next ? </span>: web-components, WASM, Rust</p>
</div>

---

```yaml
layout: cover
hideInToc: true
```

<h2 class="font-semibold">Thanks for listening!</h2>
<h2 class="font-semibold">Do you have any questions?</h2>
<img src="/images/questions.svg" alt="questions" class="absolute right-20 top-1/2 transform -translate-y-1/2 max-h-[16rem]">
