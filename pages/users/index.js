import Link from 'next/link'
import React from 'react'

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com'},
    { id: 2, name: 'John ase', email: 'john@example.com'},
    { id: 3, name: 'John oflr', email: 'john@example.com'},
    { id: 4, name: 'John sdtb', email: 'john@example.com'},
]

function Users() {
  return (
    <>
        <div>Users List</div>
        <h1>header</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}> <Link href={`/users/${user.id}`} >{user.name}</Link> </li>
            ))}
        </ul>
    </>
  )
}

export default Users