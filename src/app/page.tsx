"use client"

import { useEffect, useState } from "react"

const Home = () => {
  const [game, setGame] = useState<Phaser.Game>()

  useEffect(() => {
    const initPhaser = async () => {
      const Phaser = await import("phaser")

      const create = () => {

      }
      
      const preload = () => {
      
      }
      
      const update = () => {
      
      }

      const phaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'phaser-game',
        width: 800,
        height: 600,
        scene: {
          create,
          preload,
          update
        }
      })

      setGame(phaserGame)
    }

    initPhaser()
  }, [])
  return <div id="phaser-game" key="phaser-game" />
}

export default Home
