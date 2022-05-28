import type { Ref, UnwrapRef } from 'vue'

import { ref } from 'vue'

export interface Action {
  type: string
  payload: any
}

export interface Reducer {
  (state: Ref<any>, action: Action): void
}

export interface Dispatch {
  (action: Action): void
}

function useReducer<State>(
  reducer: Reducer,
  initialState: State
): [Ref<UnwrapRef<State>>, Dispatch] {
  const state = ref<State>(initialState)

  const dispatch = (action: Action): void => {
    reducer(state, action)
  }

  return [state, dispatch]
}

export default useReducer
