export interface TestComponentProps {
  foo: string
}

const TestComponent: React.FC<TestComponentProps> = (props) => {
  return <div>Hello, world!</div>;
};

export default TestComponent;
