import Image from 'next/image'

type Testimonial = {
  name: string
  isVerified: boolean
  image: string
  headline: string
  testimony: string
}

type Props = {
  testimonial: Testimonial
  classes?: string
}

const TestimonialItem = ({
  testimonial: { name, isVerified, image, headline, testimony },
  classes = '',
}: Props) => {
  return (
    <li
      className={`${classes} flex flex-col max-w-sm p-8 rounded-lg shadow-xl md:py-6 gap-y-4 tracking-wide`}
    >
      <figure className='flex items-center gap-4'>
        <Image
          src={`/images/${image}`}
          alt={`Picture of ${name}`}
          height={28}
          width={28}
          className='rounded-full'
        />
        <figcaption>
          <p className='text-sm font-medium'>{name}</p>
          <span className='block text-xs text-current opacity-50'>
            {isVerified ? 'Verified Graduate' : 'Unverified'}
          </span>
        </figcaption>
      </figure>
      <p className='text-xl font-semibold'>{headline}</p>
      <blockquote className='text-current opacity-70'>
        {`“ ${testimony} ”`}
      </blockquote>
    </li>
  )
}

export default TestimonialItem;
