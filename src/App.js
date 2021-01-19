import React, { useEffect } from 'react'
import Tmdb from './tmdb'


export default () => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      console.log(list)
    }

    loadAll()
  }, [])

  return (
    <div>
      Hi, world!
    </div>
  )
}