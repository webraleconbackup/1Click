import React from 'react';
import Hero from '../components/Hero';
import OurWorkSection from '../components/OurWorkSection';
import ConceptMood from '../components/ConceptMood';
import UpcomingEvents from '../components/Upcomming';
import HomeService from '../components/HomeService'
// import Testimonial from '../components/Testimonial';
// import FollowUs from '../components/FollowUs';
import {
  homeAnniversary,
  homeBaby,
  homeBirthday,
  homefestival,
  homehaldi,
  homemarried,
} from '../data';
// import Enquiry from '../components/Enquiry';
import Banner from '../components/Banner';
import HeroBanner from '../components/HeroBanner';
import FAQ from '../components/FAQ';
import Map from '../components/Map';

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Banner /> */}
      <HeroBanner />
      {/* <UpcomingEvents /> */}
      {/* <OurWorkSection /> */}
      <ConceptMood />
      
      <HomeService title='Baby Decoration' services={homeBaby}/>
      <HomeService title='Birthday Decoration' services={homeBirthday}/>
      <HomeService title='Anniversary Decoration' services={homeAnniversary}/>
      <HomeService title='Haldi / Mehndi Decoration' services={homehaldi}/>
      <HomeService title='Just Married Decoration' services={homemarried}/>
      {/* <HomeService title='Festival Decoration' services={homefestival}/> */}
      <FAQ />
      <Map />
      {/* <Testimonial /> */}
      {/* <FollowUs images={gallery} title=' Gallery' link="/gallery"/> */}
      {/* <Enquiry /> */}
    </div>
  );
};

export default Home;
