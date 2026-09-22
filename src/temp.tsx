interface HelloProps {
  name: string;
  age: number;
  isMan: boolean;
}

function Welcome(hp: HelloProps) {
  return <p>Hello {hp.name}, you're age {hp.age}, you're man: {hp.isMan}</p>;
}

function App() {
  const name = "Alice";
  return <Welcome name={name} age={30} isMan={true} />;
}