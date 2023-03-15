import React, { useState } from "react"
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ]

    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter((counter) => counter.id !== id)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
        console.log("reset")
    }
    const handleIncrement = (id) => {
        const updateCounters = counters.map((counter) => ({
            ...counter,
            value: counter.id === id ? (counter.value += 1) : counter.value,
        }))
        setCounters(updateCounters)
    }
    const handleDecrement = (id) => {
        const updateCounters = counters.map((counter) => ({
            ...counter,
            value: counter.id === id ? (counter.value -= 1) : counter.value,
        }))
        setCounters(updateCounters)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

export default CountersList
