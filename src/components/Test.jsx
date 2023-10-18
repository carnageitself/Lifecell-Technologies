import React from 'react'

const Test = () => {
  return (
    <section className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-blue-600 sm:text-2xl sm:leading-9">
          <p>
            “Very good Quality, Performance, Reliability, Service and more.”
          </p>
        </blockquote>
        <figcaption className="mt-10">
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            {/* <div className="font-semibold text-gray-900">Judith Black</div>
            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
              <circle cx={1} cy={1} r={1} />
            </svg> */}
            {/* <div className="text-gray-600">CEO of Workcation</div> */}
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
  )
}

export default Test