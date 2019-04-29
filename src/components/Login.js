import React  from 'react'

const Login = ({authenticate}) => {
    return (
        <div className='login'>
            <h2>Connecte toi pour créer tes recttes</h2>
            <button onClick={authenticate} className='facebook-button'>
            me connecter avec facebook
            </button>
            
        </div>
    )
}

export default Login