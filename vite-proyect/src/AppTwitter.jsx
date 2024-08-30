import { useState } from 'react';
import PropTypes from 'prop-types'
export function AppTwitter({children,userName,initialIsFollowing}) {


  const [isFollowing, setIsFollowing] =useState(initialIsFollowing )
  //console.log(isFollowing)
const text = isFollowing ? 'Siguiendo' : 'Seguir'
const stateButton = isFollowing ? 'tw-button is-following' : 'tw-button' 



const handleClick = ()=>{
  setIsFollowing(!isFollowing)
}
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-body'>
        <img className='tw-avatar'
          src={`https://unavatar.io/x/${userName}`}
          alt="El avatar de prueba"
        />
        <div className='tw-follow-nameUser'>
            <strong>{children}</strong>
            <span className='tw-span-nameUser'>@{userName}</span>
        </div>
      </header>
      <aside className='tw-followButton'>
        <button className={stateButton} onClick={handleClick}>
          <span className='tw-button-stateFollow'>{text}</span>
          <span className='tw-button-stopStateFollow'> Dejar de seguir</span>
           
        </button>
      </aside>
    </article>
    
  );
}
AppTwitter.propTypes ={
  children: PropTypes.node,
  userName: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
 isFollowing:PropTypes.bool.isRequired,
}
