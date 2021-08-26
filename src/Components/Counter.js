import React from 'react'
import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    return (
        <>
            <div className="Counter">
                <span className={count > 0 ? "positive" : "negative"}>{count}</span>
                <div className="button-wrapper">
                    <button onClick={decrement}>-</button>
                    <button onClick={increment}>+</button>
                </div>
            </div>
        </>
    )
}
