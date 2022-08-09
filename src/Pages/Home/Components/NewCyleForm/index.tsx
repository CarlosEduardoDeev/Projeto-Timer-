import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { CyclesContext } from '../..'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

// eslint-disable-next-line react-hooks/rules-of-hooks

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        list="task-suggestions"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 1" />
        <option value="projeto 1" />
        <option value="projeto 1" />
      </datalist>

      <label htmlFor="">durante</label>

      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
