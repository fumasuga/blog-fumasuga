"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedYear, setFormattedYear] = useState("");
  const [weekday, setWeekday] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      setFormattedDate(`${today.getMonth() + 1}.${today.getDate()}`);
      setFormattedYear(today.getFullYear().toString());
      setWeekday(today.toLocaleDateString('en-US', { weekday: 'long' }));
    };
    updateDate();

    const timer = setInterval(updateDate, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-6 mb-6 md:mt-12 md:mb-10 px-2 md:px-0">
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold tracking-tighter leading-tight mb-0">
            {pathname !== "/" ? (
              <Link href="/" className="hover:underline">
                Tech Blog
              </Link>
            ) : (
              <>Tech Blog</>
            )}
            .
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-2xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-2 mb-0">
            {formattedDate}
          </p>
          <div className="flex flex-col items-end justify-center text-right ml-2 md:ml-4">
            <p className="text-gray-600 text-xs md:text-sm">
              {formattedYear}
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              {weekday}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
