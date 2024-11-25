<?php

namespace App\Http\Controllers;

use App\Models\Profiling;
use App\Http\Requests\StoreProfilingRequest;
use App\Http\Requests\UpdateProfilingRequest;
use Illuminate\Http\Request;

class ProfilingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profiling = Profiling::all();
        return response()->json([
            'response' => $profiling
        ], 200); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:225',
            'address' => 'required',
            'email' => 'required',
            'contact_number' => 'required',
            'role_id' => 'required',
        ]);

        $profiling = Profiling::create($validateData);
        return response()->json(['message' => 'Account created succesfully', 'product' => $profiling], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $profiling =  Profiling::where('id', $id)->first();
        return response()->json([
            'response' => $profiling
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Profiling $profiling)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profiling $profiling)
    {
        //
    }
}