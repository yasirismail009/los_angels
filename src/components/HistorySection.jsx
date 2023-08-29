import { SliderComponent } from "./ui/Slider";

export const HistorySection = () => {
  return (
    <section
      className="bg-peak bg-cover h-screen bg-no-repeat relative"
      id="history"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-2/3 relative">
          <h4 className="font-Oswald text-[8.5rem] text-[#677896] font-black">
            01.
          </h4>
          <span className="text-[2rem]  md:left-[62%] font-black text-[#414f6b] absolute  left-[58%] lg:left-[58%] top-20">
            HISTORY
          </span>
          <p className="sm:ml-24 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>

      <SliderComponent />
    </section>
  );
};
