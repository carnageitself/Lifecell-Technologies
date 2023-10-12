import logo from "../assets/companylogo.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-full pt-20">
        <div className="overflow-hidden hero shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:h-[90vh] h-[60vh]">
          <div className="mx-auto max-w-md lg:max-w-[50%] text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left mt-40 lg:mt-14">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-sm leading-8 flex flex-col items-start text-gray-300 sm:text-lg">
              <li>
                Located in major production center of Maharashtra(Aurangabad).
              </li>
              <li>Well connected through Highways,Airport,Railway station.</li>
              <li>Surrounded by the Big Pharma Companies.</li>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link to="/products">
                <span className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-blue-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-card">
                  Get started
                </span>
              </Link>
              <Link to="/aboutus">
                <span className="text-sm font-semibold leading-6 text-white rounded-md bg-black/10 ring-1 ring-black/10 px-3.5 py-2.5">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16  lg:mt-28">
            <img
              className="absolute hidden left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={logo}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
