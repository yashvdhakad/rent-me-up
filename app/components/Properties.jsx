import Marquee from "react-fast-marquee";

const Properties = ({ city, direction }) => {
  return (
    <section className="w-full my-12 p-6 rounded-xl bg-white flex flex-col gap-6 shadow">
      <h2 className="text-2xl font-bold">Top Rental Properties In {city}</h2>
      <Marquee className="rounded-xl" speed={40} direction={direction} pauseOnHover autoFill>
        <div className="mx-3 p-2 rounded-xl bg-red-50 flex flex-col gap-2">
          <div className="w-96 h-96 bg-jp bg-cover bg-center rounded-xl shadow flex flex-col justify-end">
            <div className="p-4 bg-gradient-to-b from-transparent to-black/80 backdrop-blur-xl rounded-xl text-zinc-200 flex flex-col gap-2">
              <svg
                className="absolute top-4 right-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#e4e4e7"
                  stroke-width="1.5"
                  d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"
                />
              </svg>
              <div className="">
                <h3 className="text-2xl font-semibold">
                  3 BHK Flat in Mansarovar
                </h3>
                <p className="text-sm font-medium">⭐ 4.5/5</p>
              </div>
              <p className="text-sm text-zinc-300">
                Mansarovar is a residential locality with a variety of 3 BHK
                apartments that are already constructed...
              </p>
              <div className="flex gap-2">
                <p className="px-4 py-2 bg-white/10 rounded-lg font-semibold">
                  ₹5,000/month
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="px-6 py-3 font-semibold bg-red-500 rounded-xl text-zinc-50 shadow hover:shadow-none transition-all hover:scale-95 hover:bg-red-600">
              Contact Owner
            </button>
            <button className="px-6 py-3 font-semibold hover:text-red-500">
              More Details
            </button>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Properties;
