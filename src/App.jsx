import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Video from './components/Video'
import Marquee from './components/Marquee'
import VideoSection from './components/VideoSection'
import VideoSection2 from './components/VideoSection2'
import VideoSection3 from './components/Videosection3'
import VideoSection4 from './components/VideoSection4'
import KeepContentSafe from './components/KeepContentSafe'
import VideoCards from './components/VideoCards'
import AboutSection from './components/AboutSection'
const App = () => {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <>
        <div className='w-full h-auto bg-gradient-to-b from-[#0f172a] to-[#1e293b]'>
          <div className='w-full h-full bg-[url("./assets/hero.png")] bg-cover bg-center bg-no-repeat bg-opacity-90'>
            <div className='backdrop-blur-sm'>
              <Header />
              <Hero />
              <Video />
              <Marquee />
              <VideoSection />
              <VideoSection2 />
              <VideoSection3 />
              <VideoSection4 />
              <KeepContentSafe />
              <VideoCards />
              <AboutSection />
            </div>
          </div>
        </div>
      </>
    </ReactLenis>
  )
}

export default App