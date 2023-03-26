import styles from "../../../style"
import { titleLogo } from "../../../assets"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}  flex`}>
        <div className={`grid grid-cols-4 gap-4 w-full xl:px-0 sm:px-16 px-5 space-x-20 `}>
          <div className={`flex-col`}>
            <img src={titleLogo} alt="NEXTLAUNDRY" className="w-[336px] h-[40px]"></img>
            <p className={` ${styles.paragraph} container w-full`}>
              Lorem ipsum dolor sit amet consectetur. Purus tempus tincidunt massa laoreet in non.
            </p>
          </div>
          <div className="flex-col">
            <p className={` ${styles.paragraph} container w-1/4`}>
              Company
            </p>
          </div>
          <div className="flex-col">
            <p className={` ${styles.paragraph} container w-1/4`}>
              Support
            </p>
          </div>
          <div className="flex-col">
            <p className={` ${styles.paragraph} container w-1/4`}>
              Contact Info
            </p>
          </div>
          <div className={`w-full border-t-4`} color="white"></div>
          <div className={`w-full flex items-end`}>
          <p className={`text-right font-righteous font-medium ${styles.copyright} opacity-30 pb-5 pl-10 w-[700px] w-full`}>&copy;Copyright @ 2023 NextLaundry. All Rights Reserved.</p>
        </div>
        </div>
    </section>
  )
}

export default Footer