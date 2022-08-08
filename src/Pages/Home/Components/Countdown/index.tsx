import { differenceInSeconds } from "date-fns";
import { useState } from "react";
import { CountdownContainer, Separador } from "../../style";

  

const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

const totalsecond = activeCycle ? activeCycle.minutesAmount * 60 : 0

useEffect(() => {
  let interval: number

  if (activeCycle) {
    interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate,
      )

      if (secondsDifference >= totalsecond) {
        setCycles((state) =>
          state.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishiedDate: new Date() }
            } else {
              return cycle
            }
          }),
        )

        setAmountSecondsPassed(totalsecond)

        clearInterval(interval)
      } else {
        setAmountSecondsPassed(secondsDifference)
      }
    }, 1000)
  }
  return () => {
    clearInterval(interval)
  }
}, [activeCycle, activeCycleId,totalsecond])


export function Countdown(){
    return(
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separador>:</Separador>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
    )
}