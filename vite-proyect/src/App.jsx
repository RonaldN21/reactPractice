import './App.css'

import { AppTwitter } from "./AppTwitter.jsx";
export function App (){
    const listUsers=[
        {
            id:1,
            userName:"federico",
            isFollowing:true,
            name:"federico12"
        },
      
        {
            id:2,
            userName:"federico",
            isFollowing:true,
            name:"federico12"
        },
      
        {
            id:3,
            userName:"federico",
            isFollowing:false,
            name:"federico12"
        },
      
        {
            id:4,
            userName:"federico",
            isFollowing:true,
            name:"federico12"
        },
      
        {
            id:5,
            userName:"federico",
            isFollowing:false,
            name:"federico12"
        },
      
    ]
    return(
        <div className='App'>
        
        {listUsers.map(user =>{
            const {userName,name,isFollowing,id} =user
            return(
                <AppTwitter key={id}
                userName={userName}
                initialIsFollowing={isFollowing}
                >
                    {name}
                </AppTwitter>
            )
        })

        }
           
         
        </div>
      
       
       
    );
}