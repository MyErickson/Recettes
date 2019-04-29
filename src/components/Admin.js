import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, {firebaseApp} from '../base'



class Admin extends Component {

    state ={
        uid:null,
        chef:null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.handleAuth({user})
            }
        })
    }

    handleAuth = async authData => {
       const box = await base.fetch(this.props.pseudo, {context:this })

       if (!box.chef) {
           // post( j'ecris une donnée)
           await base.post(`${this.proprs.pseudo}/chef`, {
               data: authData.user.uid
           })
       }
       this.setState({
           uid:authData.user.uid,
           chef:box.chef || authData.user.uid
       })
    }


    authenticate = () =>{
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.handleAuth)
    }

    logout = async() => {
        await firebase.auth().signOut()
        this.setState({uid : null})
    }
    render () {
        const { recettes, chargerExemple, majRecette, ajouterRecette,supprimerRecette } = this.props
        
        const logout = <butoon onClick={this.logout}></butoon>
        // si l'utilisateur n'est pas co
        if(!this.sate.uid){
            return <Login authenticate = {this.authenticate}/>
        }
        if(this.state.uid !== this.state.chef){
            return (
                <div>
                    <p>tu n'est pas le chef de cette boite !</p>
                    {logout}
                </div>
            )
        }
        
        return (
            <div className='cards'>
            <AjouterRecette ajouterRecette = { ajouterRecette }/>
            {
                 Object.keys(recettes)
                 .map(key => <AdminForm 
                 key={key}
                 id={key}
                 majRecette={majRecette}
                 supprimerRecette = {supprimerRecette}
                 recettes={recettes} /> )
            }
       
            <footer>
                {logout}
                <button onClick={chargerExemple} >remplir</button>
            </footer>
            </div>
        )
    }
}

export default Admin