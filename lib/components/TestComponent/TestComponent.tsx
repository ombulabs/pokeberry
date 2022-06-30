export interface TestComponentProps {
  foo?: string;
}

const TestComponent: React.FC<TestComponentProps> = (props) => {
  return <div>Hello, {props.foo === 'bar' ? 'world' : 'test'}!</div>;
};

export default TestComponent;
