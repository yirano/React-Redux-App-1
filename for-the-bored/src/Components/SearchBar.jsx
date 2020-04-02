import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Actions/actions'

const SearchBar = () => {
  const [value, setValue] = useState()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actions.shortenURL(value))
    setValue('')
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <input type="text" name="search" value={value} onChange={(e) => handleChange(e)} placeholder="Search Here" />
      <input type="submit" />
    </form>
  )
}

export default SearchBar;

// https://twitter.com/search?q=%23secondwave&src=trend_click