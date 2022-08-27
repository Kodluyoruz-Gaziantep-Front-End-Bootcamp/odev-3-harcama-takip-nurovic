
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Input = () => {
    const [value, setValue] = useState('');
    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
  
    const { addExpence } = useContext(GlobalContext);
  
    const onSubmit = e => {
      e.preventDefault();
  
      const newExpence = {
        value,
        color,
        title
      }
      addExpence(newExpence);
      setValue('')
      setColor('')
      setTitle('')
    }
  
    return (
      <>
        <h3>Add new expence</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Expence</label>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter expence..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >color </label>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color..." />
          </div>
          <div className="form-control">
            <label htmlFor="title"
              >Title </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
          </div>
          <button className="btn">Add Expence</button>
        </form>
      </>
    )
}

export default Input
