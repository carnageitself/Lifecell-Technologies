import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import {MdOutlineLeaderboard} from "react-icons/md"

const features = [
  {
    name: 'Goal 1',
    description:
      'Produce High Quality Product.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Goal 2',
    description:
      'Accessible and affordable to all',
    icon: LockClosedIcon,
  },
  {
    name: 'Goal 3',
    description:
      'Increase satisfaction of our client base.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Goal 4',
    description:
      'To be a Leader in Pyrogen free test-tube in India & International Market.',
      icon: MdOutlineLeaderboard,
  },
]

export default function Goals() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <h1 className="mt-2 text-3xl tracking-tigh uppercase sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
            Our Goals
          </h1>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.description} className="relative pl-16">
                <dt className="font-semibold leading-7 text-blue-400 text-xl">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-blue-400">
                    <feature.icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
                  </div>
                  {feature.description}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
