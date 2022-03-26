import * as React from 'react';

/**
 * Hook used to initialize a session value.
 */
export function useSessionDefault(name: string, initialState: any) {
  React.useLayoutEffect(() => {
    if (!sessionStorage.getItem(name)) {
      sessionStorage.setItem(name, initialState);
    }
  }, [name, initialState]);
}
