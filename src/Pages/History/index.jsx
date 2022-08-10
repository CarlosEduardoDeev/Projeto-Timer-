import { HistoryContainer, HistoryList, Status } from './style'
import { CyclesContext } from '../../Contexts/CycleContext'

import { useContext } from 'react'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}Minutos</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                    {cycle.finishiedDate && (
                      <Status statusColor="green">Concluido</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">interrompido</Status>
                    )}
                    {!cycle.finishiedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )

            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
