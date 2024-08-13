import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'

export default function DeleteItemButton({pizzaId}) {
    const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
  )
}
