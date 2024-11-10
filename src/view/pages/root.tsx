// import { useState } from 'react';
import Header from '../components/Header';

type Props = {
  renderDateIso: string;
};

export default function Page({ renderDateIso }: Props) {
  console.log('xdxd', renderDateIso);
  //   const [test, setTest] = useState(null);

  return (
    <div className="xdxd 123">
      <Header />
      <p>Server side rendered at: {renderDateIso}</p>
    </div>
  );
}
