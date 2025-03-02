import { createContext, FC, ReactElement, useState } from "react";
import { Match } from "./types";
type MatchesProps = {
    matches: Match[];
    isLoading: boolean;
    isError: boolean;
}

type MatchesActions = {
    setMatches: (matches: Match[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setIsError: (isError: boolean) => void;
}

type MatchesContextType = [
  matches: MatchesProps,
  actions: MatchesActions,
];

const MatchesContext = createContext<MatchesContextType>([
  {
    matches: [],
    isLoading: false,
    isError: false
  },
  {
    setMatches: () => {},
    setIsLoading: () => {},
    setIsError: () => {}
  }
] as MatchesContextType);

type MatchesContextProviderProps = {
  children: ReactElement;
}

const MatchesContextProvider: FC<MatchesContextProviderProps> = ({ children }) => {
    const [state, setState] = useState<MatchesProps>({
        matches: [],
        isLoading: true,
        isError: false
    });

    const setMatches = (matches: Match[]) => {
      setState((prev: MatchesProps)  => ({
        ...prev,
        matches
      }));
    }

    const setIsLoading = (isLoading: boolean) => {
      setState((prev: MatchesProps)  => ({
        ...prev,
        isLoading
      }));
    }

    const setIsError = (isError: boolean) => {
      setState((prev: MatchesProps)  => ({
        ...prev,
        isError
      }));
    }
  
    return (
      <MatchesContext.Provider value={[state, {setMatches, setIsLoading, setIsError}]}>
        {children}
      </MatchesContext.Provider>
    );
};

export { MatchesContext, MatchesContextProvider };