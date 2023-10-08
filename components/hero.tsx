'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`, height: '150vh', backgroundPositionX: -500, backgroundPositionY: 0}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="absolute transform translate-y-1/3 pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-5xl mx-1 text-left pb-12 md:pb-16 content-center">
            <h1 className="h1 mb-0 text-6xl text-transparent bg-clip-text bg-gradient-multi text-glow" data-aos="fade-up">Hello, I am</h1>
            <h1 className="h1 mb-4 text-6xl text-transparent bg-clip-text bg-gradient-multi text-glow" data-aos="fade-up">
                <TypeAnimation
                    sequence={[
                        "BooleanCube", 2000,
                        "a Competitive Programmer", 2000,
                        "a Software Developer", 2000,
                        "an Open Source Contributor", 2000,
                        "a Research Scientist", 2000,
                        "a Quality Assurance Tester", 2000,
                        "a Content Creator", 2000,
                        "an Astrophysics Enthusiast", 2000,
                        "a Competitive Athlete", 2000,
                        "a Huge Weeb", 2000
                    ]}
                    speed={20}
                    repeat={Infinity}
                />
            </h1>
            <div className={"absolute bottom-10"} data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-gradient-multi hover:bg-purple-900 w-full mb-4 sm:w-auto sm:mb-0" href="#about">Learn more</a>
            </div>
          </div>

          {/*<ModalVideo*/}
          {/*  thumb={VideoThumb}*/}
          {/*  thumbWidth={1024}*/}
          {/*  thumbHeight={576}*/}
          {/*  thumbAlt="Modal video thumbnail"*/}
          {/*  video="/videos/video.mp4"*/}
          {/*  videoWidth={1920}*/}
          {/*  videoHeight={1080} />*/}

        </div>

      </div>
    </section>
  )
}
