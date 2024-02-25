<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_permission = [
            ['role' => 'Admin', 'permission' => ['add book', 'edit book', 'delete book', 'view book']],
            ['role' => 'User', 'permission' => ['view book', 'edit book']],
        ];
        foreach ($role_permission as $permission) {
            $role =  Role::create(['name' => $permission['role']]);
            $role->syncPermissions($permission['permission']);
        }
    }
}
