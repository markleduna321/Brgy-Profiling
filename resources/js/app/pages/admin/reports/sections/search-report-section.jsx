import React from 'react'

export default function SearchReportSection() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto">
    <div className="flex flex-col">
        <label for="from_date" className="text-sm font-medium text-gray-700">From:</label>
        <input type="date" id="from_date" name="from_date" 
            className="mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
    </div>
    <div className="flex flex-col">
        <label for="to_date" className="text-sm font-medium text-gray-700">To:</label>
        <input type="date" id="to_date" name="to_date" 
            className="mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
    </div>
    <button 
        className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Generate Report
    </button>
</div>

  )
}
