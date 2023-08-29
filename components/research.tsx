'use client'

import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Research() {
    return (
        <section>
            <div className={"max-w-screen-xl mx-auto px-4 sm:px-6 rule-break rounded-full"} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-24">

                    {/* Section header */}
                    <div id="projectsheader" className="pb-28">
                        <div className="max-w-2xl mx-8 text-left bf-left float-left">
                            <h1 className="h2 mb-4 text-transparent bg-clip-text bg-gradient-multi text-glow">Research & Exploration</h1>
                        </div>
                        <div className="text-right bg-right float-right mx-8">
                            <a className="btn text-white bg-gradient-multi hover:bg-purple-900 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" href="https://booleancube.github.io/articles">All articles</a>
                        </div>
                    </div>
                    <div className="pb-12 md:pb-16 mx-8">
                        <p className="text-xl text-gray-500">Researching STEM related topics has been a great interest of mine. As an aspiring space-technology software R&D engineer, I decided to dip my hands in the field and have a go at some interesting topics. Here are some of my works:</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20 mx-8">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto opacity-60" src={"https://booleancube.github.io/assets/images/articles/segtree.png"} width={600} height={700} alt="About 01" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Topic: Data Structures and Algorithms</div>
                                    <h3 className="h3 mb-3">Bottom-Up Segment Tree</h3>
                                    <p className="text-xl text-gray-400 mb-4">A segment tree is a data structure that allows for range updating and querying in O(log(n)) runtime complexity. This is very important to optimize many vital components of software and comes handy for specific competitive programming problems. The bottom-up segment tree implementation is rarely explained online despite its advantage in runtime efficiency.</p>
                                    <p className="text-xl text-gray-400 mb-4">
                                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://booleancube.github.io/articles/003">[Article Page]</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={"https://booleancube.github.io/assets/images/articles/chaos.jpeg"} width={580} height={405} alt="About 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Topic: Mathematics</div>
                                    <h3 className="h3 mb-3">Chaos Theory</h3>
                                    <p className="text-xl text-gray-400 mb-4">Chaos can be found everywhere because it is a natural attribute of life. Nature tends to be chaotic in general. In chaos theory, we explore how mathematical maps and functions can be used to convey and measure chaos, so we can decode how chaos works in the universe.</p>
                                    <p className="text-xl text-gray-400 mb-4">
                                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://booleancube.github.io/articles/005">[Article Page]</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto opacity-60" src={"https://booleancube.github.io/assets/images/articles/collatz.jpg"} width={550} height={405} alt="About 03" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Topic: Mathematics</div>
                                    <h3 className="h3 mb-3">Collatz Conjecture</h3>
                                    <p className="text-xl text-gray-400 mb-4">The simple piecewise function, caused such large commotion and has gone unsolved for over 8 decades. The simple 3x + 1 problem was rumored to be a Soviet trap designed to slow down American mathematics and science during the space race between the two nations. Here is a compilation of all promising patterns observed on this topic and my own approach as to how we can crack the code.</p>
                                    <p className="text-xl text-gray-400 mb-4">
                                        &gt; <a className="text-purple-200 hover:text-purple-100" href="https://booleancube.github.io/articles/008">[Article Page]</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
