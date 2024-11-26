// ProfilingTableSection.jsx
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfilingTableSection() {
    const { profilings } = useSelector((store) => store.profiling);  // Correctly select 'profilings'

    // Ensure profilings is always an array
    const profilingData = Array.isArray(profilings) ? profilings : [];

    console.log('profiling', profilings);
    console.log('profilingData', profilingData);

    return (
        <div className="-mx-4 mt-8 sm:-mx-0 bg-white p-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                            Contact #
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {profilingData.length > 0 ? (
                        profilingData.map((profile) => (
                            <tr key={profile.id}>
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                                    {profile.name}
                                    
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{profile.address}</td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{profile.email}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{profile.contact_number}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <a
                                        href={`/admin/profiling/${profile.id}`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        View<span className="sr-only">, {profile.name}</span>
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="5"
                                className="py-4 pl-4 pr-3 text-center text-sm text-gray-500 sm:pl-0"
                            >
                                No profiling data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}