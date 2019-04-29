import React from 'react'

const Header = ( {pseudo} ) => {
    //expression regex qui use la fonction test de js . Il retourne true ou false
    const formatPseudo = pseudo => /[aeiouyh]/i.test(pseudo[0]) ? `d'${pseudo}`:
    `de ${pseudo}`
   
    return (
        <header>
            <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
        </header>
    )
}

export default Header