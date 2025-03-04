import React, { useEffect, useState } from 'react'

function ThemeOptions({theme}) {
    

    useEffect(() => {
        const selectedTheme = localStorage.getItem('theme')

        if(selectedTheme) {
        document.querySelector('body').setAttribute('data-theme', selectedTheme)
       
        let themeChecked = document.getElementById(`theme-${selectedTheme}`)

        themeChecked.checked = true
    }
        
    })

    function setTheme() {
        document.querySelector('body').setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }

  return (
    <input type='radio' name='theme'  onClick={setTheme} className='theme-option' id={`theme-${theme}`}></input>
  )
}

export default ThemeOptions