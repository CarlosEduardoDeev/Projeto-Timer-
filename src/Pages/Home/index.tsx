import { Play } from 'phosphor-react'

import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separador,
  StartCounterDownButton
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label>Vou trabalhar em</label>
          <input id="task" />
          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />
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
