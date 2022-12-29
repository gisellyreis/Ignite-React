import { createContext, ReactNode, useReducer, useState } from "react";

interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CreateCycleData {
  task: string;
  minutes: number;
}

interface CyclesContextType {
  cycles: Cycle[],
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  secondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  handleSetSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interrupCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

interface CycleState {
  cycles: Cycle[],
  activeCycleId: string | null
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer((state: CycleState, action: any) => {
    switch(action.type) {
      case 'ADD_NEW_CYCLE':
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        }
      case 'INTERRUPT_CURRENT_CYCLE':
        return {
          ...state,
          cycles: state.cycles.map(cycle => {
            if(cycle.id === state.activeCycleId) {
              return {...cycle, interruptedDate: new Date()}
            } else {
              return cycle
            }
          }),
          activeCycleId: null
        }
      case 'MARK_CURRENT_CYCLE_AS_FINISHED':
        return {
          ...state,
          cycles: state.cycles.map(cycle => {
            if(cycle.id === state.activeCycleId) {
              return {...cycle, finishedDate: new Date()}
            } else {
              return cycle
            }
          }),
          activeCycleId: null
        }
      default: 
        return state  
    }
    
  }, {
    cycles: [],
    activeCycleId: null,
  })
  
  const [secondsPassed, setSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState 
  
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function handleSetSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }
  
  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId,
      }
    })
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      }
    })

    setSecondsPassed(0)
  }

  function interrupCurrentCycle() { 
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId,
      }
    })
  }


  return (
    <CyclesContext.Provider 
      value={{ 
        cycles,
        activeCycle, 
        activeCycleId,
        secondsPassed,
        handleSetSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        interrupCurrentCycle,
      }}
    >
      { children }
    </CyclesContext.Provider>
  )
}