type Props = {
  children: JSX.Element;
};

export default function Base({ children }: Props) {
  return (
    <html>
      <head>
        <title>React SSR</title>
        <script src="/public/runtime.bundle.js" defer></script>
        <script src="/public/root.bundle.js" defer></script>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
