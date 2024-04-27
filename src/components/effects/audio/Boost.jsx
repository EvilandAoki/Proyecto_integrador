import { useEffect, useRef } from 'react'
import { PositionalAudio } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { mutation, useStore } from '../../store'

export const BoostAudio = () => {
  const ref = useRef(null)
  const [boost, maxSpeed, sound] = useStore(({ controls: { boost }, vehicleConfig: { maxSpeed }, sound }) => [boost, maxSpeed, sound])

  useFrame(() => {
    const rate = Math.pow(mutation.speed / maxSpeed, 1.5) + 0.5
    ref.current?.setVolume(rate * 1.5)
    ref.current?.setPlaybackRate(rate)
    if (!mutation.boost && ref.current?.isPlaying) ref.current.stop()
  })

  useEffect(() => {
    if (ref.current && sound) {
      const isBoosting = boost && mutation.boost > 0
      if (isBoosting && !ref.current.isPlaying) ref.current.play()
      if (!isBoosting && ref.current.isPlaying) ref.current.stop()
    }
    return () => {
      if (ref.current && ref.current.isPlaying) ref.current.stop()
    }
  }, [boost, sound])

  return <PositionalAudio ref={ref} url="/src/effects/sounds/boost.mp3" distance={5} />
}
