import React from 'react'
import AdminLayout from '../layout'
import AdminDashboardCardSection from './_sections/admin-dashboard-card-section'
import AdminUpdatesSection from './_sections/admin-updates-section'
import AdminChartSection from './_sections/admin-chart-section'
import AdminPieChartSection from './_sections/admin-peichart-section'

export default function AdminDashboard() {
  return (
    <AdminLayout>
        
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-5 rounded-lg bg-white px-4 pb-12 pt-5 shadow-lg sm:px-6 sm:pt-6">
        <div className="flex-1 flex flex-col h-full">
            <AdminDashboardCardSection />
        </div>
        <div className="flex-1 flex flex-col h-full">
            <AdminChartSection />
        </div>
        <div className="flex-1 flex flex-col h-full">
            <AdminPieChartSection />
        </div>
        </div>


        

        <div className=" mt-14 rounded-lg bg-white px-4 pb-12 pt-5 shadow-lg sm:px-6 sm:pt-6">
            <AdminUpdatesSection/>
        </div>
        
    </AdminLayout>
  )
}
