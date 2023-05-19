"use server"
import Image from "next/image"

export default async function ResponsiveImage(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        marginTop: 32,
      }}
    >
      <Image alt={props.alt} style={{ objectFit: "contain" }} fill {...props} />
    </div>
  )
}
