import { ReactNode } from "react"

type Tab = {
   label:string
   content:ReactNode
   value:string
}

export type Props = {
  tabs:Tab[]
  value?:string
  className?:string
  baseClassName?:string
}