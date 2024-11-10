// 'use client';

import { useState } from 'react';
import Header from '../components/Header';

type Props = {
  renderDateIso: string;
};

export default function Page({ renderDateIso }: Props) {
  const [count, setCount] = useState(0);

  console.log('renderDateIso', renderDateIso);
  console.log('count', count);

  return (
    <div className="xdxd 123">
      <Header pageName="Home" />
      <p>Server side rendered at: {renderDateIso}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
