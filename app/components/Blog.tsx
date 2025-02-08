import React from "react";
import blog1 from "../../public/images/blog-1.png";
import blog2 from "../../public/images/blog-2.png";
import blog3 from "../../public/images/blog-3.png";
import blog4 from "../../public/images/blog-4.png";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  return (
    <div className="w-full h-auto border-2 border-black flex flex-col items-center p-10 ">
      {/* one */}
      <div className="py-6 border-2 border-black">
        <Image
          className=" "
          src={blog4}
          width={600}
          height={100}
          alt="banner-image"
        ></Image>
      </div>
      {/* two */}
      <div className="border-2 border-black w-full text-center text-3xl font-semibold p-6">
        <h1>Leatest Blog</h1>
      </div>

      {/* three */}
      <div className="w-full py-4 h-auto gap-4 flex flex-col items-center justify-center px-14 sm:grid sm:grid-cols-12 ">
        {/* blog-1 */}
        <div className="sm:col-span-2 h-[400px] overflow-hidden rounded-md w-full hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
          {/* image */}
          <div className="relative h-[45%]  ">
            <Image
              src={blog1}
              alt="blog-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* content */}
          <div className=" ">
            <div className="flex items-center justify-around py-1 text-sm">
              <p>SaberAli</p>
              <p>21 August,2020</p>
            </div>

            <div>
              <h1 className=" sm:text-xl  text-lg font-semibold px-2 py-1">
                Top esssential Trends in 2021
              </h1>
            </div>

            <div className="">
              <p className="  text-[#72718F] sm:text-base text-sm px-2 py-1">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
            </div>

            <div className=" px-2 py-1 text-sm sm:text-base">
              <Link
                href={"/shop"}
                className=" border-b-[1px] border-black hover:border-red-500 transition-all hover:text-red-500"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* blog-2 */}
        <div className="h-[400px] overflow-hidden rounded-md w-full hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
          {/* image */}
          <div className="relative h-[45%]  ">
            <Image
              src={blog2}
              alt="blog-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* content */}
          <div className=" ">
            <div className="flex items-center justify-around py-1 text-sm">
              <p>SaberAli</p>
              <p>21 August,2020</p>
            </div>

            <div>
              <h1 className=" sm:text-xl  text-lg font-semibold px-2 py-1">
                Top esssential Trends in 2021
              </h1>
            </div>

            <div className="">
              <p className="  text-[#72718F] sm:text-base text-sm px-2 py-1">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
            </div>

            <div className=" px-2 py-1 text-sm sm:text-base">
              <Link
                href={"/shop"}
                className=" border-b-[1px] border-black hover:border-red-500 transition-all hover:text-red-500"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* blog-3 */}
        <div className="h-[400px] overflow-hidden rounded-md w-full hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
          {/* image */}
          <div className="relative h-[45%]  ">
            <Image
              src={blog3}
              alt="blog-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* content */}
          <div className=" ">
            <div className="flex items-center justify-around py-1 text-sm">
              <p>SaberAli</p>
              <p>21 August,2020</p>
            </div>

            <div>
              <h1 className=" sm:text-xl  text-lg font-semibold px-2 py-1">
                Top esssential Trends in 2021
              </h1>
            </div>

            <div className="">
              <p className="  text-[#72718F] sm:text-base text-sm px-2 py-1">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
            </div>

            <div className=" px-2 py-1 text-sm sm:text-base">
              <Link
                href={"/shop"}
                className=" border-b-[1px] border-black hover:border-red-500 transition-all hover:text-red-500"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
