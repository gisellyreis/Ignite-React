import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { CountdownContainer, FormContainer, HomeContainer, MinutesInput, Separator, StartCountdownButton, StopCountdownButton, TaskInput } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutes: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type CicleFormData = zod.infer<typeof newCycleFormValidationSchema>
interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState(0)
  const { register, handleSubmit, watch, reset } = useForm<CicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    }
  })

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
  
  useEffect(() => {
    let interval: number

    if(activeCycle) {
     interval = setInterval(() => {
        setSecondsPassed(differenceInSeconds(new Date(), activeCycle.startDate))
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: CicleFormData) {
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

    reset()
  }

  function handleInterrupCycle() { 
    setCycles(cycles.map(cycle => {
      if(cycle.id === activeCycleId) {
        return {...cycle, interruptedDate: new Date()}
      } else {
        return cycle
      }
    }))

    setActiveCycleId(null)
  }


  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if(activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            placeholder="Dê um nome para o seu projeto" 
            list="task-suggestions"
            disabled={!!activeCycle}
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutes">durante</label>
          <MinutesInput 
            type="number" 
            id="minutes" 
            placeholder="00" 
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutes', { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        { activeCycle ? (
          <StopCountdownButton onClick={handleInterrupCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}