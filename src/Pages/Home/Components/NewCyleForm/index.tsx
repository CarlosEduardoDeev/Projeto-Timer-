import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
  .number()
  .min(1)
  .max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
  resolver: zodResolver(newCycleFormValidationSchema),
  defaultValues: {
    task: '',
    minutesAmount: 0,
  },
})


export function NewCycleForm(){
    return(
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