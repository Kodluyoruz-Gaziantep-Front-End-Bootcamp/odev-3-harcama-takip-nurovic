import React from 'react'

const ListItem = ({item}) => {
  return (
    <div className='flex'>
    <div className='ml-5'>Title: {item.title}</div>
    <div className='ml-5'>Color: {item.color}</div>
    <div className='ml-5'>Expence: {item.value}</div>
    </div>
  ) 
}

export default ListItem