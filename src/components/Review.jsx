import ReviewCard from "./ReviewCard";


const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Ayse Albayrak',
      imgSrc: '/images/Ayse.png',
      company: 'Finaghy Consultancy'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Mehmet Can Seyhan',
      imgSrc: '/images/MCS.jpg',
      company: 'Udemig,CEO'
    },

    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: '/images/people-4.jpg',
      company: 'BrightWeb'
    },
  ];

const Review = () => {


  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container">

            <h2 className="headline-2 mb-8 ">
                What Our Customers Say
            </h2>
            
            <div className="flex-col gap-3 w-fit items-center grid max-md:gird-cols-1 md:grid-cols-2  xl:grid-cols-4 ">
                {reviews.map(({content,name,imgSrc,company},key)=>(
                    <ReviewCard content={content} name={name} imgSrc={imgSrc} company={company} key={key} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review
