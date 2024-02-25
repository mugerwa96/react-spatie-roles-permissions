import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import { AuthenticationContxt } from '../context/AuthenticationContxt'
import axiosClient from '../axiosClient'

const DashBoard = () => {
     const { setRole, setPermissions, setUser, permissions, role } = useContext(AuthenticationContxt)
     useEffect(() => {
          axiosClient.get('http://127.0.0.1:8000/api/user')
               .then(({ data }) => {
                    setUser(data.user)
                    setPermissions(data.permissions)
                    setRole(data.role)
                    // console.log(response);
               }).catch((error) => {
                    console.log(error)
               })
     }, [])
     const allowedPermissions = [];
     permissions.map((permission) => allowedPermissions.push(permission.name))
     // can deriative to be used
     const can = (permission) => {
          return allowedPermissions.includes(permission)
     }
     // console.log(permissions)
     const links = [];

     // can add book
     if (can('add book')) {
          links.push({
               path: '/add-book',
               name: 'Add Book'
          })
     }
     // view book
     if (can('view book')) {
          links.push({
               path: '/view-book',
               name: 'View Book'
          })
     }
     // delete book
     if (can('delete book')) {
          links.push({
               path: '/delete-book',
               name: 'Delete Book'
          })
     }
     // edit book
     if (can('edit book')) {
          links.push({
               path: '/edit-book',
               name: 'Edit Book'
          })
     }

     const names = []
     if (can('add book')) {
          names.push({ name: 'add book' })
     }
     if (can('view book')) {
          names.push({ name: 'view book' })
     }
     if (can('delete book')) {
          names.push({ name: 'delete book' })
     }
     if (can('edit book')) {
          names.push({ name: 'edit book' })
     }

     return (
          <div className='flex'>

               {/* // side bar */}
               <div className='min-h-screen bg-slate-500 w-[15%] text-white p-4'>
                    <h1 className='font-bold text-xl  p-2'>Welcome {role.length > 0 && role}</h1>
                    <ul className='space-y-2'>
                         {
                              links?.map(({ name }, index) =>
                                   <p key={index} className='p-2 bg-slate-600 rounded hover:bg-slate-800 hover:text-white cursor-pointer duration-500'>
                                        {name}
                                   </p>)
                         }
                    </ul>
               </div>

               {/* // main section */}
               <div className='ml-2 p-4 grid grid-cols-4 gap-4'>
                    {
                         names?.map(({ name }, index) =>
                              <Card key={index} name={name} />
                         )
                    }
               </div>
          </div>
     )
}

export default DashBoard