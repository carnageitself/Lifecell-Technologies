import { ArrowPathIcon, CloudArrowUpIcon, TrophyIcon, LockClosedIcon } from '@heroicons/react/24/outline'

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
      icon: TrophyIcon,
  },
]

export default function Goals() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <h1 className="mt-2 text-3xl tracking-tigh uppercase sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
            Our Goals
          </h1>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-full lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.description} className="relative group px-6 py-4 flex items-center gap-3 bg-slate-100 rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-blue-400">
                    <feature.icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
                  </div>
                <dt className="pl-16 absolute font-semibold leading-7 text-blue-500 text-xl">
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
