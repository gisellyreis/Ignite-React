import { createContext, ReactNode, useState } from "react";

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

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState(0)
  
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function handleSetSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }
  
  function markCurrentCycleAsFinished() {
    setCycles(state => state.map(cycle => {
      if(cycle.id === activeCycleId) {
        return {...cycle, finishedDate: new Date()}
      } else {
        return cycle
      }
    }))
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setSecondsPassed(0)
  }

  function interrupCurrentCycle() { 
    setCycles(state => state.map(cycle => {
      if(cycle.id === activeCycleId) {
        return {...cycle, interruptedDate: new Date()}
      } else {
        return cycle
      }
    }))

    setActiveCycleId(null)
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