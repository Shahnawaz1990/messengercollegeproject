import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image alt='Logo' height="48" width="48" className='mx-auto w-auto' src='/images/logo.png' />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  )
}


/*
test
test@gmail.com
test123

testa
testa@gmail.com
test123



mark
mark@mail.com
mark123


npm install react-icons react-hook-form clsx
npm install @tailwindcss/forms
npm install -D prisma
npx prisma init
npx prisma db push
npm install next-auth@latest @prisma/client @next-auth/prisma-adapter bcrypt
npm install -D @types/bcrypt
npm install axios
npm install react-hot-toast
npm install react-icons
npm install next-superjson-plugin
npm install date-fns
npm install next-cloudinary
npm install @headlessui/react
npm install react-select
npm install react-spinners
npm install pusher pusher-js
npm install lodash
npm install -D @types/lodash
npm install zustand

*/