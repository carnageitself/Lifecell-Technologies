import biocon from "../assets/biocon.png"
import cipla from "../assets/cipla.png"
import fdc from "../assets/fdc.png"
import ipca from "../assets/ipca.png"
import kabi from "../assets/kabi.png"
import lupin from "../assets/lupin.png"
import microlabs from "../assets/microlabs.png"

export default function Partners() {
    return (
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold leading-8 text-white">
            Current Client Base
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
              <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={lupin}
            alt="Statamic"
            width={162}
            height={70}
          />
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={biocon}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={cipla}
              alt="Reform"
              width={158}
              height={44}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={fdc}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={ipca}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={kabi}
              alt="Statamic"
              width={158}
              height={48}
            />
                <img
              className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={microlabs}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  