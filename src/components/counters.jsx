import React, {useState} from 'react';
import Counter from './counter'

const Counters = () => {
  const basket = [
    {value: 0, id: 1, name:'Футбольный мяч'},
    {value: 0, id: 2, name:'Баскетбольный мяч'},
    {value: 1, id: 3, name:'Перчатки'},
    {value: 0, id: 4, name:'Бутсы'},
    {value: 5, id: 5, name:'Сланцы'}
  ]
  const [counters, setCounters] = useState(basket)

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id)
    setCounters(newCounters)
  }
  const handleIncrement = (counterId) => {
    const newCounters = [...counters]
    const indexBasket = newCounters.findIndex((index) => index.id === counterId)
    newCounters[indexBasket].value ++
    setCounters(newCounters)
  }
  const handleDecrement = (counterId) => {
    const newCounters = [...counters]
    const indexBasket = newCounters.findIndex((index) => index.id === counterId)
    if (newCounters[indexBasket].value === 0) {
      return
    }
    newCounters[indexBasket].value --
    setCounters(newCounters)
  }

  const handleReset = () => setCounters(basket)

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Сброс</button>
      {counters.map((counter) =>
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      )}
    </div>
  );
};

export default Counters;