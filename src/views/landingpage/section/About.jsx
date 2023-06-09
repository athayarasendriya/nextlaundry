import { about, ellipseclothes, ellipseyear } from '../../../assets';
import styles from '../../../style';

const About = () => {
    return (
        <section id="About" className={`flex flex-row flex-col md:ml-10`} >
         <div className="flex flex-row flex-grow grow pt-14 pr-14 mr-14 ml-14">
            <div className={`flex flex-col font-poppins font-semibold z-20`}>
                <p className={`flex flex-row underline underline-offset-4 text-2xl ${styles.copyright}`}>
                    About
                </p>
                <img src={ about }  className="w-[500px] h-[500px]"/>
            </div>
            <div className="flex flex-col flex-grow grow align-end items-end pt-10 pr-10">
                <h1 className={`text-right w-full ${styles.heading2}`}>
                    Better Way, <br/>For Better Day!
                </h1>
                <p className={`pt-5 text-right ${styles.paragraph} container w-2/4`}>
                    Lorem ipsum dolor sit amet consectetur. Purus tempus tincidunt massa laoreet in non.
                </p>
                <div className="flex gap-20 ">
                    <img src={ ellipseyear } alt="year" className="w-[180px] h-[180px]"/>
                    
                    <img src={ ellipseclothes } alt="year" className="w-[180px] h-[180px]"/>
                </div>
            </div>
            <div className={`align-end items-end items-right bg-royalBlue container w-[16px] h-[150px] rounded-[50px] mt-14 `}></div>
        </div>
        
    </section>
    )
}

export default About