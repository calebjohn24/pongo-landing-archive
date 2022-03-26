import { createContext, useContextSelector } from '@fluentui/react-context-selector';
import type { ContextSelector, Context } from '@fluentui/react-context-selector';

export type AppContextValue = {
  setTheme: () => void;
  findTheme: String;
};

export const AppContext: Context<AppContextValue> = createContext<AppContextValue>({
  setTheme: () => {},
  findTheme: '',
});

export const AppProvider = AppContext.Provider;

export const useAppContext = <T,>(selector: ContextSelector<AppContextValue, T>) =>
  useContextSelector(AppContext, selector);
