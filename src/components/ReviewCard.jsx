import PropTypes from 'prop-types'
import React from 'react'


const ratings = new Array (5);
ratings.fill({
    icon:"star",
    style:{fontVariationSettings:'"FILL"1'}
});



const ReviewCard = ({content,name,imgSrc,company,classes}) => {
  return (
    <div className='bg-zinc-800 p-5 rounded-xl  flex flex-col lg:min-w-[250px] '>

      <div className='flex items-center gap-1 mb-3'>
        {ratings.map(({icon,style},key)=>(
            <span key={key} className='material-symbols-rounded text-yellow-300 text-[18px]' style={style}>
                {icon}
            </span>
        ))}
      </div>

      <p className='text-zinc-400 mb-8 '>
        {content}
      </p>

      <div className='flex items-cetner gap-2 mt-auto'>
        <figure className='img-box  rounded-lg'>
            <img src={imgSrc} alt={name} width={56} height={56} loading='lazy'  className='' />
        </figure>

        <div>
            <p>{name}</p>

            <p className='text-xs text-zinc-400 tracking-wider'>
                {company}
            </p>
        </div>
      </div>
    </div>
  )
}


ReviewCard.propTypes={
    imgSrc:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    company:PropTypes.string.isRequired,
    classes:PropTypes.string
}



export default ReviewCard
