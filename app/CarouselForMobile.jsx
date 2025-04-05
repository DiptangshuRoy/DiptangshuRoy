import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ClientTestimonialsCard1 from './ClientTestimonialsCards/Card1/ClientTestimonial';
import ClientTestimonialsCard2 from './ClientTestimonialsCards/Card2/ClientTestimonial';
import ClientTestimonialsCard3 from './ClientTestimonialsCards/Card3/ClientTestimonial';
import ClientTestimonialsCard4 from './ClientTestimonialsCards/Card4/ClientTestimonial';


const CarouselForMobile = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className=' flex  items-center justify-center'>
            <div className='w-[calc(100vw-2rem)]'>
              <ClientTestimonialsCard2 />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
                    <div className=' flex  items-center justify-center'>
            <div className='w-[calc(100vw-2rem)]'>
          <ClientTestimonialsCard1 />
          </div>
          </div>
        </CarouselItem>
        <CarouselItem>
                    <div className=' flex  items-center justify-center'>
            <div className='w-[calc(100vw-2rem)]'>
          <ClientTestimonialsCard4 />
          </div>
          </div>
        </CarouselItem>
        <CarouselItem>
                    <div className=' flex  items-center justify-center'>
            <div className='w-[calc(100vw-2rem)]'>
          <ClientTestimonialsCard3 />
          </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}

export default CarouselForMobile
