let today = new Date();
let formattedDate = `${today.getMonth() + 1}.${today.getDate()}`;
let formattedYear = today.getFullYear();
let weekday = today.toLocaleDateString('en-US', {weekday: 'long'});

export function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-8 mb-8 md:mt-16 md:mb-12 px-4 md:px-0">
      <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 md:mb-0">
        Blog.
      </h1>
      <div className="flex flex-row items-center">
        <p className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-4 md:mb-2 md:mb-0">
          {formattedDate}
        </p>
        <div className="flex flex-col items-center justify-center text-center text-lg ml-4">
          <p className="text-gray-600 text-base md:text-lg">
            {formattedYear}
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            {weekday}
          </p>
        </div>
      </div>
    </section>
  );
}
