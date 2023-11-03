# Front-end page rendering method

## CSR client rendering

> `CSR` Client Side Rendering

Client-side rendering means that after the browser requests the page `URL`, the server directly returns an empty static `HTML` file. This HTML file needs to be loaded with `JavaScript` scripts and `CSS` style sheets for the browser to load and execute. These files dynamically change the structure of the `DOM` tree so that the page can be rendered into the interface required by the user. This dynamic rendering method is client-side rendering (CSR).

### advantage

- **Partial Refresh**: No need to make full page request every time
- **Lazy loading**: When loading for the first time, you can only load the data in the visible area
- Rich site interaction
- Reduce server pressure
- Separation of front and rear ends

### shortcoming

- Not good for SEO
- **Slow first screen rendering**: You need to wait for the `JavaScript` script file to be loaded before starting to render the page.

::: tip SEO
SEO (Search Engine Optimization): **Search Engine Optimization**, using the rules of search engines to improve the natural ranking of the website within the relevant search engines. The purpose is to allow it to occupy a leading position in the industry and gain brand benefits.
:::

## SSR server-side rendering

> `SSR` Server Side Rendering

Server-side rendering means that when the browser requests the page `URL`, the server assembles the `HTML` text we need and returns it to the browser. After this `HTML` text is parsed by the browser, it does not need to go through `JavaScript `The script download process can directly build the `DOM` tree we want and display it on the page. This process of server-side assembly of `HTML` is called server-side rendering (SSR).

### advantage

- Good for SEO
- Fast first screen rendering

### shortcoming

- Taking up server resources
- Poor user experience: new pages need to re-render the entire page on the server side, and cannot be partially rendered
- High template maintenance costs

## Isomorphic rendering

Isomorphic rendering is a modern server-side rendering solution that actually combines the advantages of `CSR` client-side rendering and `SSR` server-side rendering to achieve complementarity;<br />
The process is to first perform server-side rendering in `Node.js` to generate `HTML`, and then take over page interaction through client-side rendering.

- Isomorphism: means that the same set of code can run on both the server and the client at the same time\*\*
  - Routing isomorphism
  - Data isomorphism
  - Rendering isomorphism
- Dehydrate (`dehydrate`): Inject the prefetched data into `window` before rendering `HTML` directly on the server side
- Water injection (`hydrate`): Pass the data bound on `window` to the corresponding component before rendering on the client

![Isomorphic rendering process](./images/page-rendering-isomorphism.png)

::: tip Why is data dehydration and water filling required?
Ensure that server-side and client-side rendered components have the same `props` and `DOM` structures
:::

### advantage

- Good for SEO
- Fast first screen rendering
- **Partial Refresh**: No need to make full page request every time

### shortcoming

- Performance pressure of `Node` service
- Differences between server and browser environments

### Out-of-the-box SSR framework

- [Next.js](https://github.com/vercel/next.js) `React` application development framework
- [Nuxt.js](https://github.com/nuxt/nuxt.js) `Vue.js` universal application framework

## SSG static site generation

> `SSG` Static Site Generation

Static site generation means that an `HTML` file containing content is generated for each page during construction. When the browser requests the page `URL`, the server directly returns HTML.

### advantage

- Good for SEO
- Fast first screen rendering
- Reduce server pressure

### shortcoming

- Application needs to be rebuilt and deployed every time content is changed
- Unable to generate user-related content

::: tip SSG application scenarios

SSG is suitable for scenarios where the page content can be determined when it is built.

- Static official website
- Documentation website

:::
