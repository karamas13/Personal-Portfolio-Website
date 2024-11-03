import aboutme from "../assets/aboutme.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl">
          About
          <span className="text-purple-800"> Me</span>
        </h2>   
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="h-[38rem] w-auto object-cover rounded-xl" src={ aboutme }/>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">{ ABOUT_TEXT }</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About