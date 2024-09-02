import HomeView from './HomeView/MyComponent'
import TechStack from './HomeViewBottomNavbar/TechStack';
import SomeFeaturedProjects from './SomeFeaturedProjects';
import LaptopsContainer from './Laptops/LaptopsContainer';
import HaveIdeaAboutProject from './HaveIdeaAboutProject/HaveIdeaAboutProject';
import FooterNavbar from './FooterNavbar/MyComponent';
import LogoWithName from './LogoWithName';
import ImageComponent from './HaveIdeaAboutProject/ImageComponent';
import ClientTestimonials from './ClientTestimonials/ClientTestimonials';
import ClientTestimonialsCard1 from './ClientTestimonialsCards/Card1/ClientTestimonial';
import ClientTestimonialsCard2 from './ClientTestimonialsCards/Card2/ClientTestimonial';
import ClientTestimonialsCard3 from './ClientTestimonialsCards/Card3/ClientTestimonial';
import ClientTestimonialsCard4 from './ClientTestimonialsCards/Card4/ClientTestimonial';
import MyProcessOfWork from './MyProcessOfWork/MyProcessOfWork';
import GoToTop from './GoToTopButton/GoToTopSection';
import NavigationSidebarForMobile from './NavigationSidebarForMobile/NavigationSidebarForMobile';
import LogoWithNameInFooterForMobile from './LogoWithNameInFooterForMobile'
import LaptopContainerForMobile from './Laptops/LaptopContainerForMobile'


export default function Home() {
  return (
    <>
      <NavigationSidebarForMobile />

      <HomeView />
      <TechStack />

      <MyProcessOfWork />

      <SomeFeaturedProjects />
      
      <div>
        <LaptopsContainer />
        <LaptopContainerForMobile />
      </div>

      {/* MAKE THIS RESPONSIVE */}
      <section className='mx-36 mt-12 mb-24 
                          max-sm:m-0 max-md:m-0'>
        <ClientTestimonials />
        <div className='mt-14 mx-5
                        max-md:mt-0'>
          <div className='flex justify-center items-center mb-7
                          max-sm:block max-md:block'>
            <ClientTestimonialsCard2 />
            <ClientTestimonialsCard1 />
          </div>
          <div className='flex justify-center items-center
                          max-md:block'>
            <ClientTestimonialsCard3 />
            <ClientTestimonialsCard4 />
          </div>
        </div>
      </section>

      <div className='flex justify-between items-center mx-36 mb-28
                      max-sm:m-0 max-md:m-0'>
        <HaveIdeaAboutProject />
        <ImageComponent />
      </div>

      {/* MAKE THIS RESPONSIVE */}
      <footer className='flex justify-around items-center mb-5
                          max-sm:flex-col-reverse max-md:flex-col-reverse max-sm:mt-10 max-md:mt-10 '>
        <div className='max-sm:hidden max-md:hidden'>
          <LogoWithName />
        </div>
        <FooterNavbar />
        <div className='max-sm:hidden max-md:hidden'>
          <GoToTop />
        </div>
      </footer>

      <div className='m-5
                      md:hidden'>
        <LogoWithNameInFooterForMobile />
      </div>
    </>
  );
}
