import { Play } from 'phosphor-react'
import {useForm} from 'react-hook-form'

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

  const {register,handleSubmit} = useForm()

  function handleSubmit(event){
    event.target.task.value

  }
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>

          <TaskInput
           list='task-suggestions'          
           id="task" 
           placeholder="Dê um nome para o seu projeto"
           {...register('task')}
            />

           <datalist id ="task-suggestions">
              <option value="projeto 1"/>
              <option value="projeto 1"/>
              <option value="projeto 1"/>
              <option value="projeto 1"/>

           </datalist>

          <label htmlFor="">durante</label>

          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
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
