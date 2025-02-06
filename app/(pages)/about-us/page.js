import Header from "@/app/components/Header";
import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import H2 from "@/app/components/H2";
import ShopexOffer from "@/app/components/ShopexOffer";

export default function page() {
  return (
    <div className="min-h-screen">
      <Header title="About Us" subTitle="Home.pages" subTitle2=".About Us" />
      <div className="flex">
          <div className="w-1/2">
          <div className="flex items-center justify-center p-12 absolute">
            <div className="bg-blue-950 rounded-md">
      <Image
      src="@/public/images/about.png"
      alt="image"
      width="500"
      height="500"
      className="relative left-4 bottom-4"
      />
          </div>
          </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8 p-12">
          <H2 text="Know About Our Ecomerce
Business, History" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
              <Button text="Contact Us" />

          </div>
      </div>
     <ShopexOffer/>
    </div>
  );
}
