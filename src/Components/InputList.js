import React, { useContext } from 'react';
import ListItem from './ListItem'
import { GlobalContext } from '../Context/GlobalState';
const InputList = () => {
    const { expence } = useContext(GlobalContext);

  return (
    <div>
        {
            expence && expence.map((item) => (
                <ListItem item={item} />
            ))
        }
    </div>
  )
}

export default InputList