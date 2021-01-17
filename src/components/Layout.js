import React from 'react'
import Navigation from './Navigaton'
import Footer from './Footer'
import Advert from './Advert'
import ScrollToTop from 'react-scroll-to-top'

const Layout = ({children}) => {
    return (
        <>
        <Navigation/>
          {children} 
          <ScrollToTop
            smooth
            color="blue"
          />
          <Advert/>
          <Footer/> 
        </>
    )
}

export default Layout
