import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import ConceptMood from '../components/ConceptMood'
// import Enquiry from '../components/Enquiry'

const Contactus = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
       <ServiceBanner
        title='Sociel And Family Event Decoration'
        subtitle='Home › about'
        backgroundImage={bannerImage}
      />
      <ConceptMood />
      {/* <Enquiry /> */}
    </>
  )
}

export default Contactus
