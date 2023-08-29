'use client'

import Image from 'next/image'

import FeatImage01 from '@/public/images/lollipop.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import ShowMoreLess from "@/components/ui/showMoreLess";

export default function Projects() {
  return (
    <section>
      <div className={"max-w-screen-xl mx-auto px-4 sm:px-6 rule-break rounded-full"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-24">

          {/* Section header */}
          <div id="projectsheader" className="pb-28">
            <div className="max-w-2xl mx-8 text-left bf-left float-left">
              <h2 className="h2 mb-4 text-transparent bg-clip-text bg-gradient-multi text-glow">Projects</h2>
            </div>
            <div className="text-right bg-right float-right mx-8">
              <a className="btn text-white bg-gradient-multi hover:bg-purple-900 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" href="https://github.com/BooleanCube?tab=repositories">All repositories</a>
            </div>
          </div>
          <div className="pb-12 md:pb-16 mx-8">
            <p className="text-xl text-gray-500">I've been exploring and starting projects ever since the age of 14, and on the journey, acquired many years of experience with developing software. I am currently working on multiple projects in my free time; here is a display of my most notable projects:</p>
          </div>

          {/* Items */}
          <div className="grid gap-20 pb-12">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center mx-8">
              {/* Image */}
              <div className="max-w-6xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="About 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full mb-4">Currently Maintained</div>
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Your Personal Anime Encyclopedia</div>
                  <h3 className="h3 mb-3">Lollipop Bot</h3>
                  <p className="text-xl text-gray-400 mb-4">Lollipop is an open-source organization that hosts an online discord chatbot featuring a search engine for the anime community and a plethora of games and utilities.</p>
                  <p className="text-xl text-gray-400 mb-4">
                    &gt; <a className="text-purple-200 hover:text-purple-100" href="https://lollipop-bot.github.io/">[Lollipop Website]</a>
                    <br />
                    &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/lollipop-bot">[Github Organization]</a>
                    <br />
                    &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/lollipop-bot/lollipop-discord">[Chatbot Source Code]</a>
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={"https://github.com/BooleanCube/keylab.nvim/raw/main/doc/usage.gif"} width={580} height={405} alt="About 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full mb-4">Currently Maintained</div>
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Measure and Improve Your Coding Speed</div>
                  <h3 className="h3 mb-3">keylab.nvim</h3>
                  <p className="text-xl text-gray-400 mb-4">Keylab is an open-source neovim plugin designed to help newbies of the vim community improve their coding speed. It can alternatively be used to measure a developer's coding speed on vim.</p>
                  <p className="text-xl text-gray-400 mb-4">
                    &gt; <a className="text-purple-200 hover:text-purple-100" href="https://www.libhunt.com/r/keylab.nvim">[LibHunt Profile]</a>
                    <br />
                    &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/keylab.nvim">[Source Code]</a>
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={"https://user-images.githubusercontent.com/47650058/227068673-c127064a-aaa9-495b-86ce-cd9b60a9fb71.png"} width={540} height={405} alt="About 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-red-200 rounded-full mb-4">Not Maintained</div>
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Neural Network Model from Scratch</div>
                  <h3 className="h3 mb-3">Digit Detection</h3>
                  <p className="text-xl text-gray-400 mb-4">Digit Detection is an application featuring a feed-forward neural network model with customizable dimension parameters, scholastic gradient descent, mini-batch training, etc.</p>
                  <p className="text-xl text-gray-400 mb-4">
                    &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/digit-detection">[Source Code]</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="md:py-6">
            <ShowMoreLess>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 small-rule-break rounded-full" />
              {/* Items */}
              <div className="grid gap-20 pb-12 py-12" id="moreprojects">

                {/* 4th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Content 1 */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-red-200 rounded-full mb-4">Not Maintained</div>
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Track your stocks with ease</div>
                      <h3 className="h3 mb-3">Stock Bot</h3>
                      <p className="text-xl text-gray-400 mb-4">Stock bot tracks all registered stocks periodically and based on it's price history, calculates what time and amount is appropriate to buy or sell.</p>
                      <p className="text-xl text-gray-400 mb-4">
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/stock-bot">[Source Code]</a>
                      </p>
                    </div>
                  </div>
                  {/* Content 2 */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full mb-4">Currently Maintained</div>
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Learn more about astrophotography through discord</div>
                      <h3 className="h3 mb-3">Planetary Chad</h3>
                      <p className="text-xl text-gray-400 mb-4">Planetary Chad is a discord bot that allows users view astronomy-related news feed from large public subreddits. Hosted by r/astrophotography on discord with many astrophotography hobbyists like myself!</p>
                      <p className="text-xl text-gray-400 mb-4">
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/OkeWoke/Astro-Discord-Bot">[Source Code]</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Content 1 */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full mb-4">Currently Maintained</div>
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Simple database wrapper library in Java</div>
                      <h3 className="h3 mb-3">DiscordDB</h3>
                      <p className="text-xl text-gray-400 mb-4">DiscordDB is a database wrapper library written in Java for new Java Discord API Bot developers. Provides tools to work SQLite databases without knowing any SQL at all!</p>
                      <p className="text-xl text-gray-400 mb-4">
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://jitpack.io/#BooleanCube/DiscordDB">[Jitpack Repository]</a>
                        <br />
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/DiscordDB">[Source Code]</a>
                      </p>
                    </div>
                  </div>
                  {/* Content 2 */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-red-200 rounded-full mb-4">Not Maintained</div>
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Sandbox game with particle physics</div>
                      <h3 className="h3 mb-3">Falling Sand Simulation</h3>
                      <p className="text-xl text-gray-400 mb-4">Falling Sand Simulation is a sandbox game where every pixel is an emulated particle with particle physics applied to it. Play around with the falling sand simulation which simulates real life particles like sand and water.</p>
                      <p className="text-xl text-gray-400 mb-4">
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/falling-sand-sim/releases/latest/">[Download Simulation]</a>
                        <br />
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/falling-sand-sim">[Source Code]</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Content 1 */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-red-200 rounded-full mb-4">Not Maintained</div>
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Terraria Boss Battle Game ...but you're the boss.</div>
                      <h3 className="h3 mb-3">Giant Enemy Spider</h3>
                      <p className="text-xl text-gray-400 mb-4">Giant Enemy Spider is a game built using pure C# and OpenGL graphics in a weekend for the UCF Summer 2023 Game Jam. It is a falling sand game where the player plays as the boss and has to defeat the AI player enemy.</p>
                      <p className="text-xl text-gray-400 mb-4">
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://booleancube.itch.io/giantenemyspider">[Itch.io Profile]</a>
                        <br />
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/GiantEnemySpider">[Source Code]</a>
                      </p>
                    </div>
                  </div>
                  {/* Content 2 */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-red-200 rounded-full mb-4">Not Maintained</div>
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Plan and execute your daily tasks optimally</div>
                      <h3 className="h3 mb-3">TDPlanner</h3>
                      <p className="text-xl text-gray-400 mb-4">TDPlanner is a daily task planner which decides what order you should complete your registered tasks in. TDPlanner calculates the order of completion of your registered tasks based on their importance and urgency. Research suggests that this is the most optimal approach to completing your tasks.</p>
                      <p className="text-xl text-gray-400 mb-4">
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/TDPlanner/releases/latest/">[Download Application]</a>
                        <br />
                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://github.com/BooleanCube/TDPlanner">[Source Code]</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </ShowMoreLess>
          </div>

        </div>
      </div>
    </section>
  )
}
