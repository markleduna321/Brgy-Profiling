import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ProfilingTableSection from './sections/profiling-table-section'
import { get_profiling_thunk } from './_redux/profiling-thunk';
import store from '@/app/store/store';
import ProfileCreateSection from './sections/profile-create-section';

export default function HouseholdProfilingPage() {

  useEffect(() => {
    store.dispatch(get_profiling_thunk())
    console.log('main page', store)
  }, []);

  function handleAccountAdded(params) {
    // Handle account addition here
  }

  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        
      <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Households</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the Household in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <ProfileCreateSection onProductAdded={handleAccountAdded}/>
          </div>
        </div>
      <ProfilingTableSection />
      </div>
    </AdminLayout>
  )
}