import React from 'react'
import { useSelector } from 'react-redux'

export default function Children() {
    let count = useSelector(state => state.count)
    return (
        <div>
            <h2>this is the children</h2>
            <h3>{count}</h3>
        </div>
    )
}
