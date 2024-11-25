import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'


const stats = [
  { id: 1, name: 'Total Population', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Services Availed', stat: '58.16', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Number of Household', stat: '24.57', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminDashboardCardSection() {
  return (
    <div>
      
      <dl className="mt-3 grid grid-rows-3 grid-flow-col gap-3 sm:grid-cols-1 lg:grid-cols-1">
  {stats.map((item) => (
    <div
      key={item.id}
      className="relative overflow-hidden rounded-md bg-gray-200 px-3 pb-8 pt-4 shadow-sm sm:px-4 sm:pt-5"
    >
      <dt>
        <div className="absolute rounded-md bg-indigo-500 p-2">
          <item.icon aria-hidden="true" className="h-5 w-5 text-white" />
        </div>
        <p className="ml-12 truncate text-xs font-medium text-gray-500">{item.name}</p>
      </dt>
      <dd className="ml-12 flex items-baseline pb-4 sm:pb-5">
        <p className="text-lg font-semibold text-gray-900">{item.stat}</p>
        <p
          className={classNames(
            item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
            'ml-2 flex items-baseline text-xs font-semibold',
          )}
        >
          {item.changeType === 'increase' ? (
            <ArrowUpIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 self-center text-green-500" />
          ) : (
            <ArrowDownIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 self-center text-red-500" />
          )}

          <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
          {item.change}
        </p>
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 px-3 py-3 sm:px-4">
          <div className="text-xs">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              View all<span className="sr-only"> {item.name} stats</span>
            </a>
          </div>
        </div>
      </dd>
    </div>
  ))}
</dl>

    </div>
  )
}
