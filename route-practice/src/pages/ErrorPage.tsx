const ErrorPage = () => {
  return (


     <div className="flex flex-row gap-10 justify-center items-center w-screen h-screen">
   
      <svg className="w-[100px] h-[100px] text-white dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
      </svg>
      <h1 className="text-xl font-bold">Error  404. Page Not found!</h1>
    </div>
  )
}

export default ErrorPage