import heroVideo from "../assets/hero.mp4";
import heroImage from "../assets/hero.jpeg";
import logo from "../assets/logo-hero.png";

export const Hero = () => {
  
  
  return (

    <section className="relative top-0 h-screen w-full ">
      <video
        src={heroVideo}
        preload="auto"
        autoPlay
        loop
        playsInline
        muted
        poster={heroImage}
        
        className={`h-full w-full object-cover transition-opacity duration-700`}
      ></video>
      <div className="inset-0 absolute h-screen w-full overflow-hidden px-0 lg:px-20 ">
        <div className="inset-0 absolute bg-linear-to-b from-transparent from-40% to-black z-10"></div>
        <div className={`flex justify-end flex-col relative mx-auto top-0 h-screen lg:w-280 w-full z-20 pb-20 `}>
          <img src={logo} alt="restaura" className="w-full  px-4 " />
          <p className="text-white font-semibold text-xl -mt-5  px-4">Bangladesh</p>
        </div>
      </div>
    </section>
  );
};
