import React from 'react'
import AdminLayout from '../layout'
import ReportCardSection from './sections/report-card-sectionn'
import SearchReportSection from './sections/search-report-section'

export default function ReportsPage() {
  return (
    <AdminLayout>
      
      <div>
        <SearchReportSection />
      </div>

      <ReportCardSection />
      
    </AdminLayout>
  )
}
