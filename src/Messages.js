import React,{forwardRef} from 'react';


const Messeges = forwardRef(({message , user} , ref)  => {

    return(
        <div ref={ref}>
            <div className={user === message.username ? 'messege_user text-right' : 'message_guest text-right' }>
                 <p  style={{fontSize: '10px' , color : '#DAE0E2'}}><strong>{message.username}</strong> </p>
                 <p  style={{marginBottom: '10px', marginTop : '-17px'}}> {message.message}</p>
            </div>
        </div>
    )
})
export default Messeges;