let today = new Date();
let formattedDate = `${today.getMonth() + 1}.${today.getDate()}`;
let formattedYear = today.getFullYear();
let weekday = today.toLocaleDateString('en-US', {weekday: 'long'});

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <div className="flex text-center md:text-left text-lg mt-5 md:pl-8">
        <p className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {formattedDate}
        </p>
        <div className="text-center text-lg mt-5">
          <p
            className="text-gray-600 md:text-right"
          >
            {formattedYear}
          </p>{" "}
          <p className="text-gray-600 md:text-right">
            {weekday}
          </p>
        </div>
      </div>
    </section>
  );
}
