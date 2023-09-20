import React from 'react'
import Card1 from './CardPlanos'

import CardTecnicos from './CardTecnicos'
import CardDireccion from './CardDireccion'
import CardHabilitaciones from './CardHabilitaciones'
import CardPlanos from './CardPlanos'

            const Cards  = () => {
              return (
                <div id="servicios" className='flex flex-wrap justify-center items-center gap-8 mt-8 mb-8  '>
                <CardHabilitaciones/>
                <CardPlanos/>
                <CardTecnicos/>
                <CardDireccion/>
                </div>
              )
            }

            export default Cards