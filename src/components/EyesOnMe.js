// Code EyesOnMe Component Here

import React from 'react'

function EyesOnMe(){

    return(
        <divv>
            <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </divv>
    )
}

export default EyesOnMe
