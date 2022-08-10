import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../Contexts/CycleContext'

import {
  HomeContainer,
  StartCounterDownButton,
  StopCounterDownButton,
} from './style'
import { useContext } from 'react'
import { NewCycleForm } from './Components/NewCyleForm'
import { Countdown } from './Components/Countdown'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCounterDownButton onClick={interruptCurrentCycle} type="button">
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
