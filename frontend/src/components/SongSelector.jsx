import React, { useState } from 'react'
import Select from 'react-select'
import { songs, songsName } from '../songs'

const options = songs.map((song) => ({
    value: song,   // Set the song name as the value
    label: song    // Set the song name as the label
}));


const SongSelector = () => {
    const [value, setValue] = useState('')
    console.log(value)

    function handleSelect(e) {
        setValue(e.value)
        console.log(e.value)
    }

    return (
        <div>

        </div>
    )
}

export default SongSelector
