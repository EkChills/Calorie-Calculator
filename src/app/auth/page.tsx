import React from 'react'

type PageProps = {}

const Page: React.FC<PageProps> = () => {
  const logo = (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700">
      <div className="h-[14px] w-[14px] rounded-full bg-white" />
    </div>
  )

  const google = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#FFC107"
      />
      <path
        d="M3.15308 7.3455L6.43858 9.755C7.32758 7.554 9.48058 6 12.0001 6C13.5296 6 14.9211 6.577 15.9806 7.5195L18.8091 4.691C17.0231 3.0265 14.6341 2 12.0001 2C8.15908 2 4.82808 4.1685 3.15308 7.3455Z"
        fill="#FF3D00"
      />
      <path
        d="M11.9999 22.0001C14.5829 22.0001 16.9299 21.0116 18.7044 19.4041L15.6094 16.7851C14.5717 17.5743 13.3036 18.0011 11.9999 18.0001C9.39891 18.0001 7.19041 16.3416 6.35841 14.0271L3.09741 16.5396C4.75241 19.7781 8.11341 22.0001 11.9999 22.0001Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#1976D2"
      />
    </svg>
  )

  return (
    <div className="mx-auto mt-[30vh] flex w-full max-w-[400px] flex-col gap-12 px-4">
      <div className="flex flex-col gap-2">
        {logo}
        <div>
          <h4 className="text-2xl font-semibold">Welcome to Wind</h4>
          <p className="text-xs font-semibold opacity-70">
            Track Your Calories, Transform Your Life.
          </p>
        </div>
      </div>
      <button className="flex h-[48px] items-center justify-center gap-2 rounded-lg bg-green-100 text-base font-medium text-black">
        {google}
        Continue with Google
      </button>
    </div>
  )
}
export default Page
