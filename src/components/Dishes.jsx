import { DISHES } from "../constants/index";
export const Dishes = () => {
  return (
    <section className="py-16" id="dishes">
      <h1 className="text-4xl sm:text-5xl lg:text-4xl text-center  mb-20">
        Our Dishes
      </h1>

      <div className="grid  gap-8 md:grid-cols-5 sm:grid-cols-3  grid-cols-1 mx-5 ">
        {DISHES.map((card, index) => {
          return (
            <div className=" cursor-pointer group mb-2" key={index}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt=""
                  className="w-full  group-hover:scale-110 transition-all duration-400"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold tracking-tighter mb-2 group-hover:text-neutral-50">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-200">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
