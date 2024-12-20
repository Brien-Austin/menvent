import { signIn } from "../../../auth"
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
  return (
    <main className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-full max-w-screen-sm px-4">
      <form 
        action={async () => {
          "use server"
          await signIn("google")
        }}
        className="w-full flex flex-col items-center gap-6 text-center"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight">
          Terovent
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 drop-shadow-md max-w-md">
          An app made for textroverts to vent out easily
        </p>

        <button 
          type="submit" 
          className="flex items-center gap-3 px-6 py-3 text-base sm:text-lg
            border border-gray-300 rounded-full shadow-md
            hover:shadow-lg transition-shadow duration-200
            bg-white text-gray-600 hover:bg-gray-50"
        >
          <FcGoogle className="text-xl sm:text-2xl" />
          <span>Sign in with Google</span>
        </button>
      </form>
    </main>
  )
}