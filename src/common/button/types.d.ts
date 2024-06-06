import { ReactNode } from "react"

export type Props = {
    children:ReactNode
    className?:string
    onClick?:()=>void
    isShadow?:boolean
}