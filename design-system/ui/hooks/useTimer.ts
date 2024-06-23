import { useEffect, useState } from 'react'

export const useTimer = ({
  seconds,
  isDefaultStart = false,
  onTimerEnd
}: {
  seconds: number
  isDefaultStart?: boolean
  onTimerEnd?: () => void
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds)
  const [startTimer, setStartTimer] = useState(isDefaultStart)

  useEffect(() => {
    if (startTimer && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1)
      }, 1000)

      return () => clearInterval(timer)
    } else {
      setStartTimer(false)
      onTimerEnd && onTimerEnd()
    }
  }, [startTimer, timeLeft])

  return { timeLeft, setStartTimer }
}
