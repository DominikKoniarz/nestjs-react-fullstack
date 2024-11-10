import Header from './Header';

export default function Page() {
  const date = new Date();

  return (
    <div className="xdxd 123">
      <Header />
      <p>Server side rendered at {date.toISOString()}</p>
    </div>
  );
}
