import React, { Component } from 'react'

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients:'',
        instructions:''

    }
    handleChange = event => {
        //on prend le name et le valure qui est dans le event.target
        const { name, value} = event.target
        this.setState({[name]:value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const recette = { ...this.state}
        this.props.ajouterRecette(recette)
        // reset le formulaire
        Object.keys(recette).forEach(element => {
            recette[element] = ''   
        });
        this.setState({ ...recette })
    }

    render () {
        return (
            <div className="card">
               <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
               <input value={this.state.nom}  onChange={this.handleChange} name='nom' type='text' placeholder='Nom de la recette'/>
               <input value={this.state.image} onChange={this.handleChange} name='image' type='text' placeholder = {'Nom de l\'image' }/>
               <textarea value={this.state.ingredients} onChange={this.handleChange} name='ingredients' rows='3' placeholder=' Liste des ingredient'></textarea>
               <textarea value={this.state.instructions} onChange={this.handleChange} name='instructions' rows='15' placeholder='Liste des instructions'></textarea>
               <button type="submit"> Ajouter une recette </button>
               
               </form>
            </div>
        )
    }
}

export default AjouterRecette