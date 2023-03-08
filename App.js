import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import data from './data'

export default function App(){
    const element = data.map(item => {
        return (
            <Main 
                key={item.id}
                item={item}
                     />
        )
    })
    
    return (
        <div>
            <Header />
            <section>
                {element}
            </section>
        </div>
        
    )
}