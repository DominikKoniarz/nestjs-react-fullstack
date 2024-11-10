type Props = {
  pageName: string;
};

export default function Header({ pageName }: Props) {
  return (
    <header className="header">
      <h1>React SSR header</h1>
      <p>Current page: {pageName}</p>
    </header>
  );
}
