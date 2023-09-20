import React from 'react'
import {
  Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button,
} from '@nextui-org/react'

function CardPrices({ planType = 'basic' }) {
  let planDetails = {};

  switch (planType) {
    case 'intermediate':
      planDetails = {
        title: 'Plan Intermedio',
        description: 'Equilibrio perfecto entre precio y características',
        price: '200',
        features: [
          'Soporte VIP 3 veces al mes',
          'Control y gestión de cuenta de redes sociales (IG, Twitter , OnlyFans, Pornhub)',
          'Integración con múltiples medios de pago',
          'Análisis mensual de desempeño en redes',
          'Personalizacion y enlace de todas las redes',
          '20 Twiteos al mes',
          '15 Posteos en Instagram',
          '10 Posteos en Pornhub',
          "5 Posteos en OnlyFans",
        ]
      };
      break;
      case 'full':
        planDetails = {
          title: 'Plan Completo',
          description: 'Maximiza tu presencia en redes',
          price: '300',
          features: [
            'Soporte VIP Ondemand',
            'Gestión total: IG, Twitter, OnlyFans, Pornhub',
            'Integración premium con todas las pasarelas',
            'Herramientas avanzadas de marketing y análisis',
            'Branding completo de perfiles',
            '40 Twiteos estratégicos al mes',
            '25 Posteos en Instagram con diseño',
            '15 Posteos optimizados en Pornhub',
            '15 Exclusivos en OnlyFans',
            'Promoción de 15 Cafesitos mensuales'
          ]
        };
        break;
  
    default:
      planDetails = {
        title: 'Plan Básico',
        description: 'Ideal para quienes están empezando',
        price: '100',
        features: [
          'Asesoramiento 1 vez al mes',
          'Control y gestión de cuenta de redes sociales (IG, Twitter)',
          'Integración básica con medios de pago',
          'Análisis mensual de desempeño en redes',
          'Personalización básica del perfil de redes sociales',
          '10 Twiteos al mes',
          '10 Posteos en Instagram al mes ',
          'Integracion con una red social adicional cliente decide (Pornhub, OnlyFans, Cafesito)'
        ]
      };

  }

  return (
    <Card className="mt-4 h-auto max-w-[380px] bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-lg">
      <CardHeader className="flex flex-col gap-3">
        <div className="flex flex-col self-start">
          <p className="text-xl font-bold">{planDetails.title}</p>
          <p className="text-sm opacity-80">{planDetails.description}</p>
        </div>
        {planType === 'full' && (
          <div className="absolute right-0 top-0 mr-1 mt-4 rotate-12 bg-yellow-400">
            <p className="p-1 leading-4">Recomendado</p>
          </div>
        )}
      </CardHeader>
      <Divider color="white" />
      <CardBody>
        <ul className="px-1">
          <li className="text-5xl font-semibold mb-4">
            <span className="flex items-baseline">
              {planDetails.price}
              <p className="text-lg ml-2">u$d</p>
            </span>
          </li>
          {planDetails.features.map((feature, index) => (
            <li key={index} className="mt-2">{feature}</li>
          ))}
        </ul>
      </CardBody>
      <Divider color="white" />
      <CardFooter className="min-h-[80px]">
        <Link>
          <Button color="primary" variant="solid" className="bg-white text-blue-600  px-28 text-lg font-medium">
            Comprar ahora
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardPrices;
