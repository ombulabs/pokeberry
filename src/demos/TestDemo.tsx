// import { useTestHook } from "../../instrumented/hooks/TestHook/TestHook";
import { useTestHook } from '../../lib/hooks';

const MockComponent: React.FC = () => {
  const testHookAcceptedValue = "bar"
  const [someState, someStateLoading] = useTestHook(testHookAcceptedValue)
  return <div>{someState} {someStateLoading.toString()}</div>;
};

export default MockComponent;
