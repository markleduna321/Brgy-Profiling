import { PaperClipIcon } from '@heroicons/react/20/solid'

import { useSelector } from 'react-redux';

export default function ProfilingIDDetailsSection() {
  const { profiling } = useSelector((store) => store.profiling);  
    console.log('Account details:', profiling); // Debugging output

    // Handle case where account data might not be available yet
    if (!profiling) {
        return <div>Loading account details...</div>; // Loading state
    }
  return (
    
    <div>
      
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{profiling.name || 'N/A'}</dd>
          </div>
          
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">Email</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{profiling.email || 'N/A'}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{profiling.address || 'N/A'}</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">Contact Number</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            {profiling.contact_number || 'N/A'}
            </dd>
          </div>
          
        </dl>
      </div>
    </div>
    
  )
}
