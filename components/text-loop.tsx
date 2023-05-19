"use client"
export default function TextLoop({ children, ...props }) {
  return <TextLoop {...props}>{children}</TextLoop>
}
