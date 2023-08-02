'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center h-screen gap-8 -mt-4 md:flex-row md:justify-center">
        <div className="sm: w-96 md:w-96">
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
        <div className=" md:w-96">
          <Image
            src="/avatoon.png"
            alt="my avatar icon"
            width={220}
            height={150}
            className="md:mx-auto"
          />
        </div>
      </section>
      <section> click any project to learn more!</section>
    </main>
  );
}
