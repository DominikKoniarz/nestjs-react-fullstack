// 'use client';

import { useState } from 'react';
import Header from '../components/Header';

type Props = {
  renderDateIso: string;
  randomCount: number;
};

export default function Page({ renderDateIso, randomCount }: Props) {
  const [count, setCount] = useState(randomCount);

  console.log('renderDateIso', renderDateIso);
  console.log('count', count);

  return (
    <div className="xdxd 123">
      <Header pageName="Home" />
      <p>Server side rendered at: {renderDateIso}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
