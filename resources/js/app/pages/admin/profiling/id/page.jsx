import React, { useEffect, useState } from 'react';

import { PaperClipIcon } from '@heroicons/react/20/solid';
import Button from '@/app/pages/components/button';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

import { useDispatch, useSelector } from 'react-redux';

import ProfilingIDDetailsSection from './_sections/profiling-id-details-section';
import AdminLayout from '../../layout';
import { get_profiling_by_id_thunk } from '../_redux/profiling-thunk';

export default function ProfilingViewPage() {
    const profiling_id = window.location.pathname.split('/')[3];
    const dispatch = useDispatch();
    const { profiling, loading, error } = useSelector((state) => state.profiling);

    useEffect(() => {
        dispatch(get_profiling_by_id_thunk(profiling_id));
    }, [dispatch, profiling_id]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>Error fetching account: {error.message}</div>; // Show error message
    }

    return (
        <AdminLayout>
            <div className="relative bg-white p-5 rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Account Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 flex gap-4">
                    <div>
                        <Button
                            type="button"
                            variant="primary"
                            size="md"
                            isLoading={false}
                            disabled={false}
                            icon={<PencilSquareIcon className="h-5 w-5" />}
                        >
                            Edit
                        </Button>
                        </div>
                    </div>
                </div>

                <ProfilingIDDetailsSection profiling={profiling} /> {/* Pass the account data */}
            </div>
        </AdminLayout>
    );
}