import { useEffect } from 'react';

type Props = {
  pageName: string;
};

export default function Header({ pageName }: Props) {
  useEffect(() => {
    const logEvery1Second = setInterval(() => {
      console.log('Header component mounted');
    }, 1000);

    return () => {
      clearInterval(logEvery1Second);
    };
  }, []);

  return (
    <header className="header">
      <h1>React SSR header</h1>
      <p>Current page: {pageName}</p>
    </header>
  );
}
