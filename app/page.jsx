import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Sumit Kanu</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo bibendum suscipit eu potenti habitant nascetur primis. 
            </p>
            {/* Button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
                href="/assets/Sumit Kanu_SWE_5.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex items-center gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}