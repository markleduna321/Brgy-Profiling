<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profiling extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'address', 'email', 'contact_number', 'role_id'];
}