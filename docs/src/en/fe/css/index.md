## Introduce the box model

::: tip What is a box model?

When laying out a document, the browser's rendering engine will represent all elements as rectangular boxes based on one of the standards **`CSS` basic box model** (CSS basic box model); `CSS ` Determine the size, position and properties of these boxes (such as color, background, border size, etc.)

Each box (i.e. box model) is composed of these four parts from outside to inside

- `margin` margins (not included in the actual size of the box)
- `border` border
- `padding` padding
- `content` content

[Introduction to the CSS Basic Box Model - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

:::

The box model is divided into **`W3C` standard box model** and **`IE` box model**. There is only one difference: **The way to calculate the actual size of the box (i.e. total width/total height) is different**

> Calculate by width 🌰

- `W3C` standard box model (default)
  - **Actual width of box = `width` + `padding` + `border`**
  - where **`width` only contains `content`** (that is, the width of the content area)
  - **Set to `W3C` standard box model via `box-sizing: content-box;`**
- `IE` box model
  - **actual width of box = `width`**
  - where **`width` = `content` + `border` + `padding`**
  - **Set to `IE` box model via `box-sizing: border-box;`**

## What is `BFC`?

> First understand some prerequisite knowledge: Formatting Context

::: tip Prerequisite knowledge: Formatting Context
Formatting Context (FC) is a special rendering area in a Web page and has a set of rendering rules, which determines how its elements are arranged and positioned, as well as their relationship with other elements. interaction\*\*

In `CSS`, each element belongs to a specific formatting context. Some elements have their own formatting context, such as root elements (`html`), block-level elements, floating elements, absolutely positioned elements, etc. Other elements can create their own formatting context through some `CSS` properties, such as `display: inline-block`, `overflow: hidden`, `float: left`, etc.
:::

> **Related information**:
>
> - [Introduction to formatting contexts Introduction to formatting contexts - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
> - [Block Formatting Context | MDN](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/Guide/CSS/Block_formatting_context)
> - [Block formatting contexts | W3C CSS2.1](https://www.w3.org/TR/CSS2/visuren.html#block-formatting)

`BFC` stands for Block Formatting Context, which is a rendering mode in `Web` pages. It is used to determine how block-level elements are arranged, positioned and interact with other elements. It is equivalent to an independent container. Internal elements and external elements do not affect each other

### Layout rules for `BFC`

- The `Box` inside `BFC` will be placed one after another in the vertical direction (**there will be no overlap of elements**)
- The vertical distance between two `Box` in `BFC` is determined by `margin`
- **The vertical margins `margin` of two adjacent `Box`s in the same `BFC` will overlap**, but will not overlap in different `BFC`
- The left margin (`margin-left`) of each child element in `BFC` touches the left border (`border-left`) of the container parent element
- The layout of elements in `BFC` is not affected by the outside world, nor does it affect external elements.
  - The area forming the `BFC` will not overlap with the floating element area\*\*
  - **When calculating the height of `BFC`, floating elements will also participate in the calculation**

### How to create `BFC`

- Root element (`<html>`)
- Floating elements: `float` is not `none`
- Absolutely positioned elements: `position` is `absolute` or `fixed`
- `display` value is the following attribute
  - `inline-block` inline block element
  - `flow-root` block-level element box
  - `table` behaves like the `<table>` element
  - `table-cell` behaves like the `<td>` element
  - `table-caption` This behaves like `<caption>`
  - `table-row` behaves like the `<tr>` element
  - `table-row-group` behaves like the `<tbody>` element
  - `table-header-group` behaves like the `<thead>` element
  - `table-footer-group` behaves like the `<tfoot>` element
  - `inline-table` inline table
- `display` value is a direct child element of `flex` `inline-flex` `grid` `inline-grid`, and they are not themselves `flex`, `grid`, `table` containers
- `contain` elements with value `layout`, `content` or `paint`
- `overflow` is not a block element for `visible` and `clip`
- Multi-column container: `column-count` or `column-width` value is not `auto`
- `column-span` value is `all`

### Application scenarios of `BFC`

> What problem was solved?

- Floating element height collapses
- Prevent elements from being covered by floated elements
- Prevent `margin` from overlapping (collapse)
- Adaptive layout

### Summary of common formatting contexts

- `BFC`: Block Formatting Context (Block Formatting Context)
- `IFC`: Inline Formatting Context In `IFC` elements are aligned along the baseline and arranged in left-to-right order
- `TCFC`: Table Cell Formatting Context. In `TCFC`, the column width of the table will be automatically adjusted according to the content of the cell, without inconsistent column widths.
- `FFC`: Flexbox Formatting Context In `FFC`, flexbox elements can be arranged according to their own size and order.
- `GFC`: Grid Formatting Context In `GFC` grid elements can be arranged according to the rows and columns of the grid

`FFC` and `GFC` rules are similar to the `BFC` block formatting context except for the fact that there are no floated child elements in its container, but excluding external floats and preventing margin overlapping are still in effect

## Pseudo selectors (pseudo elements and pseudo classes)

Pseudo-selectors include **pseudo-element** and **pseudo-class**, which are keywords added to the end of a selector

### Pseudo elements

Pseudo-element is a pseudo-element selector, which creates a fake element inside the element. It cannot match any real `html` element and uses double colon (`::`) syntax.

> Since the old version of the `W3C` specification has no restrictions, most browsers support both double colon and single colon writing.

::: details Commonly used pseudo-element selectors

- [`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before) Insert content before the first child element of the selected element
- [`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after) Insert content after the last child element of the selected element
  - Defaults to inline elements
  - Both require the [`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content) attribute (used to specify the content to be inserted)
  - Neither can be applied to replaced elements, such as `<img />` or `<br />` elements
- [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) Specifies the style for the first line of block-level elements
  - Can only be used within block elements (i.e. the `display` attribute has these values: `block`, `inline-block`, `table-cell`, `list-item` or `table-caption`)
- [`::first-letter`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter) Specifies the first character of the first line of block-level elements style
  - Can only be used within block elements (same as `::first-line`)
- [`::selection`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection) Specifies styles for the parts of the document that are selected or highlighted by the user
  - Only these styles are available: `color`, `background-color`, `cursor`, `caret-color`, `outline`, `text-decoration`, `text-emphasis-color`, `text-shadow`
- [`::placeholder`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder) Specifies a style for the placeholder text of a form element

:::

### Pseudo class

Pseudo-class is a pseudo-class selector, **indicates a certain state of the element**, using single colon (`:`) syntax

::: details Commonly used pseudo-class selectors

- User behavior pseudo-class
  - [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) Hand passing pseudo-class, triggered when the mouse passes over (mainly used on the `PC` side, The mobile version can also be used, but it disappears not quickly and the experience is not very good)
  - [`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active) Active state pseudo-class, triggered when the element is clicked (mainly used for click feedback and keyboard access cannot be triggered)
  - [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus) Focus pseudo-class, triggered when the element is in the focused state (it can only match specific elements)
    - Form elements that are not in `disabled` state, such as `<input>`
    - `<a>` element containing `href` attribute
    - `<area>` element (limited `CSS` attributes that can take effect)
    - `<summary>` element
    - already setup
