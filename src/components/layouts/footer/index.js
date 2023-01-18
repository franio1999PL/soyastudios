import SocialsItem from './SocialsItem'

const Footer = ({ footer }) => {
  const { copyrightText, footerMenuItems, socialLinks } = footer
  // console.log(footer)
  return (
    <>
      <div className='w-full p-4 border-t bg-slate-50'>
        <div className='flex flex-col text-2xl items-center justify-center'>
          <div>
            <ul className='flex justify-between gap-4 p-2 text-3xl'>
              {socialLinks &&
                socialLinks.map(({ iconName, iconUrl }) => (
                  <SocialsItem
                    key={iconName}
                    typeOfSocial={iconName}
                    iconUrl={iconUrl}
                  />
                ))}
            </ul>
          </div>
          <div className='uppercase font-light text-base'>{copyrightText}</div>
        </div>
      </div>
    </>
  )
}

export default Footer
