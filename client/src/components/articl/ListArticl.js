import React from 'react'
import { useSelector } from 'react-redux'
import { Articls } from './Articls'

const ListArticl = () => {
    const addArticl = useSelector(state => state.articlReducer.articl)
    return (
        <div>
            { addArticl.map(el=> <Articls key={el} articl={el._id}/>)}
        </div>
    )
}

export default ListArticl
