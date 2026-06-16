const Contact = () => {
  return (
    <section className="section-bg px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1350px] flex flex-col lg:flex-row justify-between gap-10 md:gap-25">
        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/50">
            Contact
          </p>

          <div className="mt-7 text-base leading-8 text-white/50 sm:text-lg">
            <p>
              Drop me a message and I&apos;ll get back to you within a day.
              Whether it&apos;s a new project, a role, or just exploring - I&apos;m listening.
            </p>
          </div>

          <div className="mt-10 space-y-2 text-base text-white/50 sm:text-lg">
            <div className="flex items-center justify-between border-t border-white/10 py-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Email</span>
              <span className="text-xs font-bold tracking-[0.2em] text-white/70">abidnirob10@gmail.com</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 py-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Based in</span>
              <span className="text-xs font-bold tracking-[0.2em] text-white/70">Mymensingh, Bangladesh</span>
            </div>
            <div className="flex items-center justify-between border-t border-b border-white/10 py-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Availability</span>
              <span className="text-xs font-bold tracking-[0.2em] text-green-500">
                ● Open to work
              </span>
            </div>
          </div>
        </div>

        {/* Right column: form card */}
        <div className="w-full lg:w-1/2">
          <div className="glass card-shadow rounded-lg p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.28em] text-white/50">Send a message</h3>

            <form className="pt-[20px]">
              <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                  <label className="text-[1rem] text-white/50">First Name</label>
                  <input
                    type="text"
                    className="peer bg-transparent border-white/20 border-b outline-none focus:border-white/50 w-full text-white/70 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                  <label className="text-[1rem] text-white/50">Last Name</label>
                  <input
                    type="text"
                    className="peer bg-transparent border-white/20 border-b outline-none focus:border-white/50 w-full text-white/70 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[5px] w-full mt-10">
                <label className="text-[1rem] text-white/50">Email Address</label>
                <input
                  type="email"
                  className="peer bg-transparent border-white/20 border-b outline-none focus:border-white/50 w-full text-white/70 transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-[5px] w-full mt-10">
                <label className="text-[1rem] text-white/50">Write Message</label>
                <textarea
                  className="peer bg-transparent border-white/20 min-h-[100px] border-b resize-none outline-none w-full text-white/70 transition-colors focus:border-white/50 duration-300"
                ></textarea>
              </div>

              <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
                <button
                  type="submit"
                  className="py-2.5 px-6 bg-white/10 border border-white/20 text-white/70 hover:bg-white/20 transition-all duration-300 rounded-md text-[1rem] mt-[10px] w-max"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
