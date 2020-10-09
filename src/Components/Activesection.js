import React,{useEffect,useContext, useState} from 'react';
import alerm from '../assets/alarm.svg'
import UserContext from '../Context/UserContext'
import firebase from 'firebase/app'
import dot from '../assets/dot.png'

const Activesection = () => {

    const context = useContext(UserContext);
    const [users , setUsers] = useState(null)

    useEffect( () => {
        if(context.user == null){
            if(localStorage.getItem('users')!=null){
                firebase.database().ref('/active/').child(localStorage.getItem('users')).remove();                
            }
            localStorage.removeItem('users')
        }else if(context.user){
            var starCountRef = firebase.database().ref('active/').orderByChild('/timestamp/');
            starCountRef.on('value', function(snapshot) {

                let temp = []
                    snapshot.forEach( childshot => {
                    var childdata ={
                        data : childshot.val()
                    }
                    
                     temp.push(childdata) 
                    })
                    setUsers(temp)
    });
        }
    }, [context.user])

    

    return(
        <div>
            {context.user && <div className="active ">        
                <h6 className="text-white"><img width="40rem" src={alerm} alt="logo"/></h6>
            <div className="pannel text-left">
                {users &&  users.map( item => (
                    <h6 className="text-secondary"><img className="mr-2 ml-2" width="20rem" src={dot} alt="dot"/>{item.data?.name}</h6>
                ))}
            </div>
         
            </div>}
        </div>
    )
}

export default Activesection;