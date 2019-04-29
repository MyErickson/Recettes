import React from 'react'

const AdminForm = ({ id: key , majRecette, recettes,supprimerRecette}) => {
    const recette = recettes[key]

    const handleChange =( event, key) =>{ 
        const {name,value} = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }
    return (
        <div className='card'>
            <form className='admin-form'>

               <input  value={recette.nom} onChange={event => handleChange(event,key)} name='nom' type='text' placeholder='Nom de la recette'/>

               <input value={recette.image} onChange={event => handleChange(event,key)} name='image' type='text' placeholder = "adresse de l'image"/>

               <textarea value={recette.ingredients}  onChange={event => handleChange(event,key)} name='ingredients' rows='3' placeholder=' Liste des ingredient'></textarea>

               <textarea value={recette.instructions} onChange={event => handleChange(event,key)} name='instructions' rows='15' placeholder='Liste des instructions'></textarea>

            </form>
            <button onClick={()=> supprimerRecette(key)}> Supprimer </button>
        </div>
    )
}



export default AdminForm