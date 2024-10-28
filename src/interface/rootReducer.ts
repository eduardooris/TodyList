// types.ts
import rootReducer from "../store/reducers";

export type RootState = ReturnType<typeof rootReducer>;

export interface Action {
  type: string;
  payload?: any;
  error?: string;
}
