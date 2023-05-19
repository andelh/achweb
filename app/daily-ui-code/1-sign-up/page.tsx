import Image from "next/image"

export const metadata = {
  title: "Daily UI #1 - Sign Up | Andel Husbands",
}

export default function SignUpDailyUI() {
  return (
    <>
      <h1 className="font-bolder mb-2 text-center">#1 Sign Up</h1>
      <div className="mb-0 flex flex-row items-center justify-center gap-3">
        <Image src="/youtube.svg" alt="youtube-icon" width={26} height={22} />
        <p className="text-sm">
          Watch on{" "}
          <span className="font-bold text-red-600 underline underline-offset-4">
            YouTube
          </span>
        </p>
      </div>
      <div
        className={`bg-background flex min-h-screen flex-col items-center justify-between p-24 font-inter text-black`}
      >
        <div className="mx-auto grid h-full w-full max-w-5xl grid-cols-2 bg-white">
          <div className="px-20 py-20">
            <div id="buttons" className="mb-20 flex flex-row gap-8">
              <button className="bg-accent rounded-full px-8 py-3 text-sm font-medium text-white">
                Sign up
              </button>
              <button className="text-light text-sm font-medium">
                Sign in
              </button>
            </div>
            <form className="flex flex-col">
              <div className="mb-6">
                <label className="mb-4 text-xs font-medium">First Name</label>
                <input
                  placeholder="First Name"
                  className="placeholder-light w-full border-b-2 py-4 pb-6 text-sm font-normal"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 text-xs font-medium">Last Name</label>
                <input
                  placeholder="Last Name"
                  className="placeholder-light w-full border-b-2 py-4 pb-6 text-sm font-normal"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 text-xs font-medium">
                  Email Address
                </label>
                <input
                  placeholder="Your email address"
                  className="placeholder-light w-full border-b-2 py-4 pb-6 text-sm font-normal"
                  type="email"
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 text-xs font-medium">Password</label>
                <input
                  placeholder="······"
                  className="placeholder-light w-full border-b-2 py-4 pb-6 text-sm font-normal"
                  type="password"
                />
              </div>
              <div className="mb-8 flex flex-row items-center gap-4">
                <input type="radio" />
                <label className="text-xs font-medium ">Terms of Service</label>
              </div>
              <button className="mb-8 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase text-white">
                Sign Up
              </button>
              <button className="text-dark text-left text-xs font-medium underline">
                Already a member? Log in
              </button>
            </form>
          </div>
          <div className="relative">
            <Image alt="image" fill src="/daily-ui/signup-image.jpg" />
          </div>
        </div>
      </div>
    </>
  )
}
