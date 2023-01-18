import {
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
  FaFacebookSquare
} from 'react-icons/fa'

const SocialsItem = ({ typeOfSocial, iconUrl }) => {
  return (
    <>
      {typeOfSocial && (
        <>
          {typeOfSocial === 'twitter' && (
            <li className='text-[#1DA1F2]/80 hover:text-[#1DA1F2] cursor-pointer '>
              <a href={iconUrl} target='_blank' rel='noreferrer'>
                <FaTwitterSquare className=' hover:shadow-sm' />
              </a>
            </li>
          )}
          {typeOfSocial === 'facebook' && (
            <li className='text-[#4267B2]/80 hover:text-[#4267B2] cursor-pointer'>
              <a href={iconUrl} target='_blank' rel='noreferrer'>
                <FaFacebookSquare className=' hover:shadow-sm' />
              </a>
            </li>
          )}
          {typeOfSocial === 'youtube' && (
            <li className='text-[#FF0000]/80 hover:text-[#FF0000] cursor-pointer'>
              <a href={iconUrl} target='_blank' rel='noreferrer'>
                <FaYoutube className=' hover:shadow-sm' />
              </a>
            </li>
          )}
          {typeOfSocial === 'instagram' && (
            <li className='text-[#C13584]/80 hover:text-[#C13584] cursor-pointer'>
              <a href={iconUrl} target='_blank' rel='noreferrer'>
                <FaInstagramSquare className=' hover:shadow-sm' />
              </a>
            </li>
          )}
        </>
      )}
    </>
  )
}

export default SocialsItem
