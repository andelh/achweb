import ContactForm from "./contact-form"

export const metadata = {
  title: "Contact me - Get a free quote | Andel Husbands",
}

export default function LetsTalkPage() {
  return (
    <div className="font-sans pt-10">
      <div className="mb-[40px]">
        <h1 className="mb-12 text-2xl md:text-5xl text-copy font-medium">
          Let's Talk
        </h1>
        <p className="text-text-muted mb-8 text-lg">
          Tell me a bit about your project so we can get the ball rolling and
          build something great together!
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
