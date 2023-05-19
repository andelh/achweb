import ContactForm from "./contact-form"

export const metadata = {
  title: "Contact me - Get a free quote | Andel Husbands",
}

export default function LetsTalkPage() {
  return (
    <>
      <div className="mb-[40px]">
        <h1 className="text-[48px] md:text-[9vmax] xl:text-[10.5vmin]">
          Let's Talk
        </h1>
        <p className="max-w-[50ch] text-lg leading-tight opacity-90">
          Tell me a bit about your project so we can get the ball rolling and
          build something great together!
        </p>
      </div>
      <ContactForm />
    </>
  )
}
