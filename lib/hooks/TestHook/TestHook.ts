import { useEffect, useState } from 'react';

export const useTestHook = (foo: string) => {
  const [someState, setSomeState] = useState<string>(foo);
  const [someStateLoading, setSomeStateLoading] = useState<boolean>(true);

  useEffect(() => {
    if (foo === 'bar') {
      setSomeStateLoading(true);
      setSomeState('baz');
      setSomeStateLoading(false);
    }
  }, [foo]);

  return [someState, someStateLoading];
};
