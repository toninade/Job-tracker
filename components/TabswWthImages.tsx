"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

const TabswWthImages = () => {
  const [tabs, setTabs] = useState("orgnized");
  return (
    <section className="border-t py-16">
      <div className="container px-4 mx-auto ">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2  justify-center mb-8">
            <Button
              size={"sm"}
              onClick={() => setTabs("orgnized")}
              className={`transition-all duration-300 rounded-lg text-sm font-medium py-3  ${tabs === "orgnized" ? "text-white " : "bg-gray-400  text-gray-700 text-xs"}`}
            >
              Orgnized Applications
            </Button>
            <Button
              size={"sm"}
              onClick={() => setTabs("hired")}
              className={`transition-all duration-300 rounded-lg text-sm font-medium py-3  ${tabs === "hired" ? "text-white  " : "bg-gray-400  text-gray-700 text-xs"}`}
            >
              Get Hired
            </Button>
            <Button
              size={"sm"}
              onClick={() => setTabs("manage")}
              className={`transition-all duration-300 rounded-lg text-sm font-medium py-3  ${tabs === "manage" ? "text-white " : "bg-gray-400 text-gray-700 text-xs"}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="flex relative mx-auto overflow-hidden rounded-2xl shadow-2xl">
            {tabs === "orgnized" && (
              <Image
                src="/hero-images/hero1.png"
                alt="orgnized"
                width={1200}
                height={800}
              />
            )}
            {tabs === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="hired"
                width={1200}
                height={800}
              />
            )}
            {tabs === "manage" && (
              <Image
                src="/hero-images/hero3.png"
                alt="manage"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabswWthImages;
