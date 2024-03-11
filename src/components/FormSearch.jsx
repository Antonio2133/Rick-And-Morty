import { useRef } from 'react'
import './styles/FormSearch.css'

const FormSearch = ({ setLocationSelected}) => {

  const inputSearch = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationSelected(inputSearch.current.value.trim())
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='form_input' ref={inputSearch} type="text" />
      <button className='form_btn'>Search</button>
    </form>
  )
}

export default FormSearch