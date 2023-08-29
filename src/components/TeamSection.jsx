import { useState } from "react";
import { Schedule } from "./ui/Schedule";
export const TeamSection = () => {
  const [active, setActive] = useState(0)

  const data =[ {
    title:"Schedule 1",
    dates:[
     "25 Nov 2016",
     "Vestibulum viverra",
     "28 Nov 2016",
     "Vestibulum viverra",
     "18 Dic 2016",
     "Vestibulum viverra",
     "7 Jan 2017",
     "Vestibulum viverra",
    ]
},{
  title:"Schedule 2",
  dates:[
   "25 Nov 2016",
   "Vestibulum viverra",
   "28 Nov 2016",
   "Vestibulum viverra",
   "18 Dic 2016",
   "Vestibulum viverra",
   "7 Jan 2017",
   "Vestibulum viverra",
  ]
}]
  return (
    <section
      className="bg-snow-peak bg-cover h-screen bg-no-repeat relative"
      id="team"
    >
      <div className="lg:flex md:flex flex-col sm:hidden hidden ">
        <div className="w-full h-full sm:h-40  lg:px-60 px-10 bg-white relative flex flex-col sm:flex-row justify-around items-center">
          <h4 className="font-Oswald text-[8.5rem] text-[#677896] font-black">
            02.
          </h4>
          <span className="text-[2rem] font-black md:left-[13.5rem] text-[#414f6b] absolute left-[17.5rem] lg:left-[25.5rem] top-16">
            CLIMB
          </span>
          <p className="text-justify sm:ml-24 my-4 w-full">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
        <div className="w-full sm:h-8 bg-[#414f6b] overflow-hidden">
          <ul className="flex flex-col sm:flex-row px-20 sm:pl-60 gap-4">
            <li className="section-links" onClick={e=>{setActive(0)}}>
             Mountain 1
            </li>
            <li className="section-links" onClick={e=>{setActive(1)}}>
             Mountain 2
            </li>
          </ul>

        
        </div>
        <Schedule data={data[active]}/>
      </div>
      <div  className="lg:hidden md:hidden flex-col sm:block block ">
  <div
    class="rounded-t-lg border border-neutral-200 ">
    <h2 class="mb-0" id="headingOne">
      <button
        class=" relative section-links flex w-full items-center rounded-t-[15px] border-0  bg-[#414f6b] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#414f6b] dark:text-white"
        type="button" onClick={e=>{setActive(0)}}>
       Mountain 1
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div style={{display:active===0?'block':'none'}}>
      <div>
      <Schedule data={data[0]}/>
      </div>
    </div>
  </div>
  <div
    class="rounded-t-lg border border-neutral-200 ">
    <h2 class="mb-0" id="headingOne">
      <button
        class=" relative section-links flex w-full items-center rounded-t-[15px] border-0  bg-[#414f6b] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#414f6b] dark:text-white"
        type="button" onClick={e=>{setActive(1)}}>
       Mountain 2
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div style={{display:active===1?'block':'none'}}>
      <div class="py-4">
      <Schedule data={data[1]}/>
      </div>
    </div>
  </div>
 
</div>
    </section>
  );
};
