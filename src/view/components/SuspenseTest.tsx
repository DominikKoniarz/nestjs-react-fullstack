export default async function SuspenseTest() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>SuspenseTest loaded</div>;
}
