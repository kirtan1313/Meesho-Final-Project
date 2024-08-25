
import React from 'react';
import MainBannerimage from '../../assets/images/Main-banner.jpg';
import Products from '../Products/Products';
import PromoSection from '../PromoSection/PromoSection';
import App from '../NewCollections/App';



function MainBanner() {
  return (
    <>
      <div className='main-banner-image w-100 overflow-hidden'>
        <img src={MainBannerimage} alt="Mainbanner" className='mainbannner-iamges' />
      </div>


      <div className='welcome-part text-center py-5'>

        <div className='fs-1 py-3'>
          <div className='welcome-font'>Welcome to Malviya</div>
        </div>
        <div className='container py-2 p-font'>
          <p className=' '>Welcome to Highfy, a new venture of Malviya Weaves Private Limited and Dreamz The Brand House, where fashion meets diversity, and style knows no boundaries. Founded by three young entrepreneurs from diverse backgrounds, Highfy is more than just a clothing brand; it's a celebration of individuality, creativity, and inclusivity.</p>
        </div>

      </div>

      <Products/>
      <PromoSection />
      <App/>
       
    </>
  )
}

export default MainBanner