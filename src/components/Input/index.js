import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const MAX_INPUT_LENGTH = 18

const _TextArea = props => <textarea {...props} />
const _Input = props => <input {...props} />

const Input = ({id, label, onChange, value}) => {
    const InputComp = value.length > MAX_INPUT_LENGTH ? _TextArea : _Input

    return (
        <div className="inputWrapper">
            <label className="label" htmlFor={id}>{label}</label>
            <InputComp className="input" id={id} type="text" value={value} onChange={onChange}/>
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input
