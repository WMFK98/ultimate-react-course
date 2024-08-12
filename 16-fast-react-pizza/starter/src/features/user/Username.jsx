import React from 'react'
import { useSelector } from 'react-redux'

export default function Username() {
    const username = useSelector(state=> state.user.username)
  return (
    <div>{username}</div>
  )
}
