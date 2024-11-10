// import { useState } from 'react';
import Header from '../components/Header';

export default function Page() {
  const date = new Date();
  console.log('xdxd', date.toISOString());
  //   const [test, setTest] = useState(null);

  return (
    <div className="xdxd 123">
      <Header />
      <p>Server side rendered at xdxdxd</p>
    </div>
  );
}
