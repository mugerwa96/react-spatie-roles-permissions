<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    //
    public function register(Request $request)
    {
        $this->validate($request, [
            "name" => 'required',
            "email" => "required|email|unique:users,email",
            "password" => "required|confirmed",
            "role" => "required"
        ]);
        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $user->assignRole($request->role);
        $token =  $user->createToken('my_app')->plainTextToken;
        return [
            'username' => $user->name,
            'email' => $user->email,
            'role' => $user->getRoleNames()->first(),
            'permissions' => UserResource::collection($user->getAllPermissions()),
            'token' => $token
        ];
        // return UserResource::collection($user);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            "email" => "required|email|exists:users,email",
            "password" => "required",
        ]);

        $user = User::where("email", $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return [
                "message" => 'invalid credentails'
            ];
        } else {
            // $user->assignRole($request->role);
            $token =  $user->createToken('my_app')->plainTextToken;
            return [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
                'role' => $user->getRoleNames()->first(),
                'permissions' => UserResource::collection($user->getAllPermissions()),
                'token' => $token
            ];
        }
    }
    public function profile(Request $request)
    {
        $user = $request->user();
        return [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
            'role' => $user->getRoleNames()->first(),
            'permissions' => UserResource::collection($user->getAllPermissions()),
        ];
    }
}
