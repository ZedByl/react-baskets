import React from 'react';

const Counter = ({onDelete, id, name, value, onDecrement, onIncrement}) => {

  return (
    <div className='counter'>
      <div className="container overflow-hidden">
        <div className="row gx-3">
          <div className='col'>
            <p>{name}</p>
          </div>
          <div className='col'>
            <p className='badge bg-info '>{value === 0 ? 'Ноль' : value}</p>
          </div>
          <div className="col">
            <button className='btn btn-success' onClick={() => onIncrement(id)}>Добавить</button>
          </div>
          <div className="col">
            <button className='btn btn-danger' onClick={() => onDecrement(id)}>Убавить</button>
          </div>
          <div className="col">
            <button className='btn btn-danger' onClick={() => onDelete(id)}>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;