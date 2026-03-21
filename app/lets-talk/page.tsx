import ContactForm from "./contact-form"

export const metadata = {
  title: "Hire a Web Developer in Trinidad — Let's Talk",
  description:
    "Looking for a web or app developer in Trinidad and Tobago? Get in touch with Andel Husbands for a free consultation on your next project.",
  alternates: {
    canonical: "https://andelhusbands.xyz/lets-talk",
  },
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
