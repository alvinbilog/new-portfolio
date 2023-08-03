'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import tools from '../data/data';
import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Greeting Section */}
      <section className="flex flex-col justify-center items-center h-screen gap-8 -mt-4 md:gap-40  md:flex-row md:justify-center ">
        <div className="sm: w-96 md:w-2/6 ">
          <div className="text-3xl font-semibold flex-col flex gap-1 text-orange-mild ">
            <span className="">Hello!</span>
            <span> I'm Alvin. </span>
            <span> 👋 </span>
          </div>
          <div className="flex-col flex gap-4 mt-4 text-text-normal font-medium">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              velit corrupti aut doloribus fugiat quibusdam optio alias tempora
              reiciendis odit eveniet.⚡
            </p>
            <p>lorem asdf asf as fas fa sdf ds a. 💻</p>
          </div>
        </div>
        <div className="md:w-74 ">
          <Image
            src="/images/avatoon.png"
            alt="my avatar icon"
            width={220}
            height={150}
            className="md:mx-auto"
            // layout="responsive"
          />
        </div>
      </section>
      {/* Projects */}
      <section className="my-10 ">
        <div className="flex flex-col items-center">
          <h3 className="text-orange-mild italic">Check My Projects</h3>
          <h3>
            <FontAwesomeIcon
              icon={faSortDown}
              beatFade
              className="text-orange-strong"
            />
          </h3>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:gap-8">
            <div className="w-96 h-80 my-4 rounded-md bg-yellow-100/80 md:w-2/6">
              p1
            </div>
            <div className="w-96 h-80 rounded-md bg-green-100/80 md:w-1/5">
              p2
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:gap-8 ">
            <div className="w-96 h-80 my-4 rounded-md bg-blue-100/80 md:md:w-1/5">
              p3
            </div>
            <div className="w-96 h-80 rounded-md bg-red-100/80 md:w-2/6">
              p4
            </div>
          </div>
        </div>
      </section>
      {/* About Me */}
      <section className=" my-20 flex flex-col  justify-center items-center gap-4 md:gap-20 md:flex-row  md:my-36">
        <div className="sm: w-96 md:w-2/6 ">
          <h1 className="flex-col flex gap-1 text-3xl text-orange-mild font-semibold">
            About Me 🍊
          </h1>
          <div className="text-text-normal font-medium gap-4 ">
            <p className="my-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sed
              dolorum, qui est id rem voluptas! Voluptas iure officia asperiores
              magnam ex maxime, amet, quisquam vitae quam quae porro animi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sed
              dolorum, qui est id rem voluptas! Voluptas iure officia asperiores
              magnam ex maxime, amet, quisquam vitae quam quae porro animi.
            </p>
          </div>
        </div>
        <div className="py-6">
          <Image
            src="/images/alvin.jpg"
            alt="my avatar icon"
            width={220}
            height={150}
            className="rounded-lg md:w-72"
          />
        </div>
      </section>
      {/* tools */}

      <section className="container mx-auto ">
        <div className="mx-7 lg:w-2/3 lg:mx-72 lg:pl-1.5 ">
          <h2 className="text-3xl md:text-left   text-orange-mild font-semibold">
            My tools 🔨
          </h2>
        </div>
        <div className="my-8 mx-7">
          <ul className="grid grid-cols-4  gap-x-11 gap-y-2  md:grid-cols-6 md:gap-x-11 md:gap-y-4 md:mx-28 lg:mx-60 text-center">
            {tools.map((tool) => (
              <div key={tool.id}>
                <li className="w-16 h-18 col-span-2 flex flex-col items-center justify-center place-self-center text-xs ">
                  <Image
                    src={tool.image}
                    width={50}
                    height={50}
                    alt={tool.alt}
                    className="grayscale my-4"
                  />
                  {tool.name}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
      {/* <section>
        <form action="https://formspree.io/f/xnqkjwvb" method="POST">
          <label>
            Name:
            <textarea type="name"></textarea>
          </label>
          <label>
            Your email:
            <input type="email" name="email" required />
          </label>
          <label>
            Your message:
            <textarea name="message" required></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </section> */}
    </main>
  );
}
