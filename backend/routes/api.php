<?php

use App\Http\Controllers\Api\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthenticationController::class, 'profile']);
    // book
    Route::get('/books', function () {
        return "books";
    })->middleware('permission:view book');
    Route::get('/delete', function () {
        return  "delete book";
    })->middleware('permission:delete book');
});

// authentication
Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login', [AuthenticationController::class, 'login']);
