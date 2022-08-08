import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'



import {
  HomeContainer,
  StartCounterDownButton,
  StopCounterDownButton,
} from './style'
import { useState, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './Components/NewCyleForm'
import { Countdown } from './Components/Countdown'



interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishiedDate?: Date
}


export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)







  

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  console.log(cycles)

  const currentSeconds = activeCycle ? totalsecond - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm />

        <Countdown />
        {activeCycle ? (
          <StopCounterDownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            interromper
          </StopCounterDownButton>
        ) : (
          <StartCounterDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCounterDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
