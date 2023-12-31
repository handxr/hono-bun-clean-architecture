import { html } from "hono/html";

export const Layout = (props: { children: any }) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.3"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Hono + Bun + htmx</title>
      <style>
        tr.htmx-swapping td {
          opacity: 0;
          transition: opacity 1s ease-out;
        }
      </style>
    </head>
    <body>
      <div class="p-4">
        <h1 class="text-4xl font-bold mb-4"><a href="/">Users List</a></h1>
        ${props.children}
      </div>
    </body>
  </html>
`;
