'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import tools from '../data/data';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-gray-800">
      {/* Greeting Section */}
      <section className="px-10 flex flex-col justify-center items-center h-screen gap-8 -mt-4 md:gap-40  md:flex-row md:justify-center ">
        <motion.div
          className="md:w-2/6 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-3xl font-semibold flex-col flex gap-1 text-teal-mild ">
            <span className="">Hello!</span>
            <span> I'm Alvin. </span>
            <span> 👋 </span>
          </div>
          <div className="flex-col flex gap-4 mt-4 text-text-normal font-medium">
            <p>
              Hi! I'm Alvin, a
              <span className="text-teal-mild"> Fullstack Developer </span>
              creating dynamic web experiences. Explore my projects and let's
              <span className="text-teal-mild"> connect </span> to bring ideas
              to life!⚡
            </p>
            <p>
              I am actively seeking a job opportunity to kickstart my career. 💻
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-74 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/avatoon2.png"
            alt="my avatar icon"
            width={220}
            height={150}
            className="md:mx-auto"
            // layout="responsive"
          />
        </motion.div>
      </section>
      {/* Projects */}
      <section className="my-10 px-10">
        <div className="flex flex-col items-center">
          <h3 className="text-teal-mild italic">Check My Projects</h3>
          <h3>
            <FontAwesomeIcon
              icon={faSortDown}
              beatFade
              className="text-teal-strong"
            />
          </h3>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:gap-8">
            <motion.div
              className="w-72 h-80 my-4 rounded-md overflow-hidden shadow-lg bg-cover bg-center md:w-2/6"
              initial={{ x: -500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="group relative w-full h-full">
                <Image
                  src="/assets/issue-tracker.png"
                  alt="Your Project"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                  <div className="hidden group-hover:flex flex-col items-center text-center">
                    <span className="text-xl text-white font-bold">
                      Issue Tracker
                    </span>
                    <p className="text-sm text-white p-4">
                      An application designed for tracking issues. It allows
                      users to assign tasks, utilize charts for visualization,
                      and offers filtering capabilities for better issue
                      management.
                    </p>
                    <p className="text-sm text-white p-4">
                      Next | TypeScript | Tailwind | Prisma | Radix UI
                    </p>
                    <div className="mt-4">
                      <Link
                        href="https://issue-tracker-ruddy-six.vercel.app/"
                        passHref
                        target="_blank"
                        className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                      >
                        View Live
                      </Link>
                      <Link
                        href="https://github.com/peashooter45/issue-tracker"
                        passHref
                        target="_blank"
                        className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                      >
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-72 h-80 rounded-md bg-green-100/80 md:w-1/5"
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="group relative w-full h-full">
                <Image
                  src="/assets/blogverse.png"
                  alt="Your Project"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                  <div className="hidden group-hover:flex flex-col items-center text-center">
                    <span className="text-xl text-white font-bold">
                      Blogverse
                    </span>
                    <p className="text-sm text-white p-4">
                      Blogverse is a blogging platform where users can create
                      and publish blog posts. It supports multimedia content,
                      including videos and pictures, and integrates with
                      Sanity.io for enhanced content management.
                    </p>
                    <p className="text-sm text-white p-4">
                      Next | TypeScript | Tailwind | Sanity | Auth
                    </p>
                    <div className="mt-4">
                      <Link
                        href="https://blogverse-o0tlzrdhn-peashooter45.vercel.app/"
                        passHref
                        target="_blank"
                        className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                      >
                        View Live
                      </Link>
                      <Link
                        href="https://github.com/peashooter45/blogverse"
                        passHref
                        target="_blank"
                        className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                      >
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:gap-8 ">
            <motion.div
              className="w-72 h-80 my-4 rounded-md bg-blue-100/80 md:md:w-1/5"
              initial={{ x: -500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="group relative w-full h-full">
                <Image
                  src="/assets/oldportfolio.png"
                  alt="Your Project"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                  <div className="hidden group-hover:flex flex-col items-center text-center">
                    <span className="text-xl text-white font-bold">
                      Old Portfolio
                    </span>
                    <p className="text-sm text-white p-4">
                      This app serves as a portfolio, specifically tailored to
                      showcase frontend development skills.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="https://alvs-portfolio.netlify.app/"
                        passHref
                        target="_blank"
                        className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                      >
                        View Live
                      </Link>
                      <Link
                        href="https://github.com/peashooter45/portfolio"
                        passHref
                        target="_blank"
                        className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                      >
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-72 h-80 rounded-md bg-red-100/80 md:w-2/6"
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="group relative w-full h-full">
                <Image
                  src="/assets/faceverse.png"
                  alt="Your Project"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                  <div className="hidden group-hover:flex flex-col items-center text-center">
                    <span className="text-xl text-white font-bold">
                      Faceverse
                    </span>
                    <p className="text-sm text-white p-4">
                      Faceverse is a social networking application. It provides
                      features for connecting with friends, sharing updates, and
                      engaging with a community.
                    </p>
                    <p className="text-sm text-white p-4">
                      Next | TypeScript | Node | Express | MongoDb | Tailwind
                    </p>
                    <div className="mt-4">
                      <div className="mb-5">
                        <Link
                          href="https://faceverse-client.vercel.app"
                          passHref
                          target="_blank"
                          className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300"
                        >
                          View Live
                        </Link>
                      </div>
                      <div className="flex justify-between">
                        <Link
                          href="https://github.com/peashooter45/faceverse-client"
                          passHref
                          target="_blank"
                          className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300 text-xs"
                        >
                          View Code Client
                        </Link>
                        <Link
                          href="https://github.com/peashooter45/faceverse"
                          passHref
                          target="_blank"
                          className="text-teal-200 bg-transparent border border-teal-200 hover:bg-teal-200 hover:text-white rounded px-4 py-2 mx-2 transition duration-300 text-xs"
                        >
                          View Code Backend
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Me */}
      <section className="px-10 my-20 flex flex-col  justify-center items-center gap-4 md:gap-20 md:flex-row  md:my-36">
        <div className="md:w-2/6 ">
          <h2 className="flex-col flex gap-1 text-3xl text-teal-mild font-semibold">
            About Me 🍊
          </h2>
          <div className="text-text-normal font-medium gap-4 ">
            <p className="my-8">
              I am Alvin, actively seeking a position to launch my career in the
              exciting field both Frontend and Backend Development. Throughout
              the pandemic, I discovered a keen interest in both Frontend and
              Backend Development. Seizing the opportunity, I devoted my time
              and resources to become skilled and knowledgeable in these
              domains. I remained committed to my goal, even taking a break from
              employment to focus on honing my skills and investing in my dream.
            </p>
            <p>
              In my career, I've embraced challenges with enthusiasm, always
              seeking opportunities to learn and grow. My dedication to my craft
              drives me to invest in acquiring new skills and staying up-to-date
              with the latest technologies.
            </p>
          </div>
        </div>
        <div className="py-6">
          <Image
            src="/images/alvin1.jpg"
            alt="my avatar icon"
            width={220}
            height={150}
            className="rounded-lg md:w-72"
          />
        </div>
      </section>

      {/* tools */}

      <section className="px-10 md:px-20 md:mx-3 lg:px-40  xl:px-80 flex flex-col justify-start items-center ">
        <div className="px-10 md:px-20 md:mx-3">
          <h2 className="text-3xl  text-teal-mild font-semibold">
            My tools 🔨
          </h2>
        </div>
        <div className="my-8">
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-x-28 lg:grid-cols-6 lg:gap-x-16 text-center">
            {tools.map((tool) => (
              <div key={tool.id} className="">
                <li className="h-18 col-span-2 flex flex-col items-center justify-center place-self-center text-xs ">
                  <Image
                    src={tool.image}
                    width={50}
                    height={50}
                    alt={tool.alt}
                    className="grayscale hover:grayscale-0 my-4"
                  />
                  <p className="text-text-normal"> {tool.name}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-10 my-8">
        <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-28">
          <div className="flex flex-col md:w-1/4">
            <h2 className="text-teal-mild text-3xl font-semibold my-4">
              Let's Connect! 📧
            </h2>
            <p className="mt-4 text-sm text-text-normal">
              Feel free to reach out to me for any inquiries, collaboration
              opportunities, or just to say hello! I'm excited to connect with
              like-minded individuals and explore potential projects together.
              You can reach me at on social media or you can send me a message
              here!
            </p>
            <div
              className="my-8 flex flex-row justify-center  gap-24 
            "
            >
              <Link href={'https://github.com/peashooter45'}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl text-teal-mild "
                />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/in/alvin-patrick-bilog-095ba6a8/'
                }
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl text-teal-mild"
                />
              </Link>
              <Link href={'https://www.facebook.com/peashooter45/'}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl text-teal-mild"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <form
              action="https://formspree.io/f/xnqkjwvb"
              method="POST"
              className="w-72 flex flex-col justify-center gap-4 md:mt-44 md:w-96 "
            >
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="border-solid border border-opacity-60 border-teal-mild rounded ps-2 text-sm h-8 p-4 md:text-lg"
              />
              <textarea
                type="message"
                name="message"
                required
                placeholder="message"
                className="border-solid border border-opacity-60 border-teal-mild rounded px-2 text-sm h-48 p-2 md:text-lg"
              />
              <button
                type="submit"
                className="p-2 rounded bg-teal-strong w-16 text-white uppercase text-xs hover:bg-slate-100 hover:border-teal-mild hover:border hover:border-opacity-50 hover:text-teal-mild mb-20"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-center py-4">
        <div>
          <p className="text-teal-mild">Created by Alvin</p>
          <p className="text-xs text-gray-400">© 2023 All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
