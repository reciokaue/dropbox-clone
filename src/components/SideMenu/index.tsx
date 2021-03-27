import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const scrollThreshhold = 300;

declare global {
  interface Window{
    toggleActiveMenu: (() => void) | undefined
  }
}

const SideMenu: React.FC = ({children}) => {
    const [ scrollY, setScrollY ] = useState(0)
    const [ isActive, setActive] = useState(false)


    useEffect(() =>{
      function onScroll(){
        setScrollY(window.scrollY)
        setActive(false)
      }

      window.addEventListener('scroll', onScroll)

      return () => window.removeEventListener('scroll', onScroll)
    }, [])
    
    const classes = [
      isActive ? 'open' : '',
      scrollY <= scrollThreshhold ? 'scrollOpen' : '',
    ]
    const className = classes.join(' ').trim()

    function toggleActiveMenu(){
      setActive(prev => !prev)
    }
    window.toggleActiveMenu = toggleActiveMenu 

    return(
      <Container className={className}>
          {children}
      </Container>
  );
}

export default SideMenu;