import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc: "Stay ahead of the weather curve with our reliable and accurate weather calculations.",
    },
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc: "Experience the art of guided exploration with our exceptional tour guides.",
    },
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc: "Craft your perfect itinerary with seamless customization, turning your travel dreams into reality.",
    }
]


const ServiceList = () => {
    return (
    <>
    {
        servicesData.map((item, index)=> (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item} />
            </Col>
            ))}
    </>
    )
}

export default ServiceList