import { Play } from 'phosphor-react'

import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separador,
  StartCounterDownButton,
  TaskInput,
  MinutesAmountInput,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label>Vou trabalhar em</label>

          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="">durante</label>

          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separador>:</Separador>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCounterDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCounterDownButton>
      </form>
    </HomeContainer>
  )
}
