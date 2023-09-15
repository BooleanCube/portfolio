import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Skills() {
  return (
    <section>
      <div className={"max-w-screen-xl mx-auto px-4 sm:px-6 rule-break rounded-full"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-8 text-left pb-8 md:pb-12">
            <h2 className="h2 mb-4 text-transparent bg-clip-text bg-gradient-multi text-glow">Skills</h2>
            {/*<p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>*/}
          </div>

          {/* Skills */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* 1st topic */}
            <div className="flex flex-col h-full px-6" data-aos="fade-up">
              <h3 className="h3 mb-3">Programming Languages</h3>
              <div className="grid gap-0 lg:grid-cols-4 lg:gap-2 items-start lg:max-w-none">
                <img src="https://img.shields.io/badge/java--gray?style=for-the-badge&logo=openjdk&logoColor=f89820&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Java" />
                <img src="https://img.shields.io/badge/python--gray?style=for-the-badge&logo=python&logoColor=4b8bbe&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Python" />
                <img src="https://img.shields.io/badge/c%2B%2B--gray?style=for-the-badge&logo=c%2B%2B&logoColor=044F88&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="C++" />
                <img src="https://img.shields.io/badge/c--gray?style=for-the-badge&logo=c&logoColor=044F88&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="C" />
                <img src="https://img.shields.io/badge/C%23--gray?style=for-the-badge&logo=csharp&logoColor=1565C0&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="C#" />
                <img src="https://img.shields.io/badge/lua--gray?style=for-the-badge&logo=lua&logoColor=1565C0&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Lua" />
                <img src="https://img.shields.io/badge/vimscript--gray?style=for-the-badge&logo=vim&logoColor=7EBF50&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Vimscript" />
                <img src="https://img.shields.io/badge/ruby--gray?style=for-the-badge&logo=ruby&logoColor=%23CC342D&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Ruby" />
              </div>
            </div>

            {/* 2nd topic */}
            <div className="flex flex-col h-full px-6" data-aos="fade-up">
              <h3 className="h3 mb-3">Website Development</h3>
              <div className="grid gap-0 lg:grid-cols-4 lg:gap-2 items-start lg:max-w-none">
                <img src="https://img.shields.io/badge/html--gray?style=for-the-badge&logo=html5&logoColor=e34c26&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="HTML5" />
                <img src="https://img.shields.io/badge/css--gray?style=for-the-badge&logo=css3&logoColor=264de4&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="CSS3" />
                <img src="https://img.shields.io/badge/JavaScript--gray?style=for-the-badge&logo=javascript&logoColor=F0DB4F&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="JavaScript" />
                <img src="https://img.shields.io/badge/react--gray?style=for-the-badge&logo=react&logoColor=61DBFB&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="React" />
                <img src="https://img.shields.io/badge/next.js--gray?style=for-the-badge&logo=next.js&logoColor=77D5D0&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Next.js" />
                <img src="https://img.shields.io/badge/tailwindcss--gray?style=for-the-badge&logo=tailwind%20css&logoColor=06b6d4&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="TailwindCSS" />
                <img src="https://img.shields.io/badge/typescript--gray?style=for-the-badge&logo=typescript&logoColor=007acc&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="TypeScript" />
                <img src="https://img.shields.io/badge/json--gray?style=for-the-badge&logo=json&logoColor=%23FFFFFF&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="JSON" />
              </div>
            </div>

            {/* 3rd topic */}
            <div className="flex flex-col h-full px-6" data-aos="fade-up">
              <h3 className="h3 mb-3">Libraries & Frameworks</h3>
              <div className="grid gap-0 lg:grid-cols-4 lg:gap-2 items-start lg:max-w-none">
                <img src="https://img.shields.io/badge/dotnet--gray?style=for-the-badge&logo=.NET&logoColor=%23512BD4&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt=".NET" />
                <img src="https://img.shields.io/badge/opengl--gray?style=for-the-badge&logo=OpenGL&logoColor=%235586A4&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="OpenGL" />
                <img src="https://img.shields.io/badge/numpy--gray?style=for-the-badge&logo=numpy&logoColor=%23013243&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="NumPy" />
                <img src="https://img.shields.io/badge/tensorflow--gray?style=for-the-badge&logo=tensorflow&logoColor=%23FF6F00&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="TensorFlow" />
              </div>
            </div>

            {/* 4th topic */}
            <div className="flex flex-col h-full px-6" data-aos="fade-up">
              <h3 className="h3 mb-3">Databases & Cloud</h3>
              <div className="grid gap-0 lg:grid-cols-4 lg:gap-2 items-start lg:max-w-none">

                <img src="https://img.shields.io/badge/sqlite--gray?style=for-the-badge&logo=sqlite&logoColor=%23003B57&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="SQLite" />
                <img src="https://img.shields.io/badge/mongodb--gray?style=for-the-badge&logo=mongodb&logoColor=%2347A248&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="MongoDB" />

                <img src="https://img.shields.io/badge/heroku--gray?style=for-the-badge&logo=heroku&logoColor=%23430098&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Heroku" />
                <img src="https://img.shields.io/badge/OCI--gray?style=for-the-badge&logo=oracle&logoColor=%23F80000&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Oracle Cloud" />
                <img src="https://img.shields.io/badge/cloudflare--gray?style=for-the-badge&logo=cloudflare&logoColor=%23F38020&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Cloudflare" />
                <img src="https://img.shields.io/badge/redis--gray?style=for-the-badge&logo=redis&logoColor=%23DC382D&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Redis" />
                <img src="https://img.shields.io/badge/vercel--gray?style=for-the-badge&logo=vercel&logoColor=FFFFFF&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Vercel" />
              </div>
            </div>

            {/* 5th topic */}
            <div className="flex flex-col h-full px-6" data-aos="fade-up">
              <h3 className="h3 mb-3">Tools</h3>
              <div className="grid gap-0 lg:grid-cols-4 lg:gap-2 items-start lg:max-w-none">
                <img src="https://img.shields.io/badge/jetbrains--gray?style=for-the-badge&logo=jetbrains&logoColor=%23FFFFFF&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="JetBrains" />
                <img src="https://img.shields.io/badge/neovim--gray?style=for-the-badge&logo=neovim&logoColor=%2357A143&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Neovim" />
                <img src="https://img.shields.io/badge/arch--gray?style=for-the-badge&logo=arch%20linux&logoColor=%231793D1&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Arch" />
                <img src="https://img.shields.io/badge/ubuntu--gray?style=for-the-badge&logo=ubuntu&logoColor=%23E95420&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Ubuntu" />
                <img src="https://img.shields.io/badge/RPI4--gray?style=for-the-badge&logo=raspberry%20pi&logoColor=%23A22846&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Raspberry Pi" />
                <img src="https://img.shields.io/badge/alacritty--gray?style=for-the-badge&logo=alacritty&logoColor=%23F46D01&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Alacritty" />
                <img src="https://img.shields.io/badge/unity--gray?style=for-the-badge&logo=unity&logoColor=%23FFFFFF&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Unity" />
                <img src="https://img.shields.io/badge/godot--gray?style=for-the-badge&logo=godot%20engine&logoColor=%23478CBF&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Godot" />
                <img src="https://img.shields.io/badge/blender--gray?style=for-the-badge&logo=blender&logoColor=%23E87D0D&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Blender" />
                <img src="https://img.shields.io/badge/eclipse--gray?style=for-the-badge&logo=eclipse%20ide&logoColor=%232C2255&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Eclipse" />
                <img src="https://img.shields.io/badge/VSCode--gray?style=for-the-badge&logo=visual%20studio%20code&logoColor=%23007ACC&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Visual Studio Code" />
              </div>
            </div>

            {/* 6th topic */}
            <div className="flex flex-col h-full px-6" data-aos="fade-up">
              <h3 className="h3 mb-3">Technical</h3>
              <div className="grid gap-0 lg:grid-cols-4 lg:gap-2 items-start lg:max-w-none">
                <img src="https://img.shields.io/badge/git--gray?style=for-the-badge&logo=git&logoColor=F1502F&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Git" />
                <img src="https://img.shields.io/badge/junit5--gray?style=for-the-badge&logo=junit5&logoColor=f89820&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="JUnit" />
                <img src="https://img.shields.io/badge/libreoffice--gray?style=for-the-badge&logo=libreoffice&logoColor=%2318A303&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="LibreOffice" />
                <img src="https://img.shields.io/badge/OSS--gray?style=for-the-badge&logo=github&logoColor=%23181717&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Github" />
                <img src="https://img.shields.io/badge/latex--gray?style=for-the-badge&logo=latex&logoColor=%23008080&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="LaTeX" />
                <img src="https://img.shields.io/badge/maven--gray?style=for-the-badge&logo=apachemaven&logoColor=%23C71A36&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Maven" />
                <img src="https://img.shields.io/badge/gradle--gray?style=for-the-badge&logo=gradle&logoColor=%2302303A&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Gradle" />
                <img src="https://img.shields.io/badge/nuget--gray?style=for-the-badge&logo=nuget&logoColor=%23004880&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="NuGet" />
                <img src="https://img.shields.io/badge/npm--gray?style=for-the-badge&logo=npm&logoColor=%23CB3837&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="npm" />
                <img src="https://img.shields.io/badge/canva--gray?style=for-the-badge&logo=canva&logoColor=%2300C4CC&labelColor=rgba(0%2C0%2C0%2C0)&color=rgba(0%2C0%2C0%2C0)" alt="Canva" />
              </div>
            </div>

          </div>

          <div className="md:py-6 mx-8">
            <h3 className="h3 mb-4">Certifications</h3>
            <ul>
              <li className={"text-gray-300"}>- Microsoft (MTA): Introduction to Programming using Java</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
