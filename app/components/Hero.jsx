const Hero = () => {
  return (
    <section className="w-full mt-32 mb-12 p-20 rounded-xl bg-heroBg bg-cover bg-center shadow flex flex-col  justify-center items-center gap-10 text-white">
      <h1 className="text-5xl font-bold text-center drop-shadow bg-white/10 backdrop-blur-xl px-10 py-6 rounded-xl border border-white/10">
        Find Your Flat and Flatmate <br />
        <span className="text-xl font-medium">
          with India's Fastest Growing Rental Properties Listing Platform.
        </span>
        <br />
        <span className="px-3 py-2 border border-white/10 rounded-lg bg-white/10 backdrop-blur-xl text-base font-medium">
          Happy Living! ❤️
        </span>
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-4">
        <div className="flex">
          <div className="pl-4 rounded-s-xl bg-white flex justify-center items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#ef4444">
                <path d="M9.707 4.793C9.414 4.5 8.943 4.5 8 4.5h-.25V3a.75.75 0 0 0-1.5 0v1.5H6c-.943 0-1.414 0-1.707.293C4 5.086 4 5.557 4 6.5v.204c.202-.053.406-.09.606-.117C5.25 6.5 6.045 6.5 6.91 6.5h.18c.865 0 1.659 0 2.304.087c.2.026.404.064.606.117V6.5c0-.943 0-1.414-.293-1.707Z" />
                <path
                  fill-rule="evenodd"
                  d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V10.5h.09c.865 0 1.659 0 2.304.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.086.646.086 1.44.086 2.306v5.339H17V16c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v5.25H5.5v-5.34c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.072c-.04-.936-.165-1.51-.569-1.914C9.828 8 8.886 8 7 8c-1.886 0-2.828 0-3.414.586C3 9.172 3 10.114 3 12v9.25H2ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
          </div>
          <input
            className="px-4 rounded-e-xl font-semibold shadow-xl focus:outline-none text-zinc-900"
            placeholder="City"
            type="text"
          />
        </div>
        <div className="flex">
          <div className="pl-4 rounded-s-xl bg-white flex justify-center items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  stroke="#ef4444"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 16.016c1.245.529 2 1.223 2 1.984c0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984"
                />
                <path
                  fill="#ef4444"
                  fill-rule="evenodd"
                  d="M11.262 17.675L12 17l-.738.675zm1.476 0l.005-.005l.012-.014l.045-.05l.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933c.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086c.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05l.012.014l.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
          </div>
          <input
            className="px-4 rounded-e-xl font-semibold shadow-xl focus:outline-none text-zinc-900"
            placeholder="Area"
            type="text"
          />
        </div>
        <button className="px-6 py-3 font-semibold bg-red-500 rounded-xl text-zinc-50 shadow hover:shadow-none transition-all hover:scale-95 hover:bg-red-400">
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;
