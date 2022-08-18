import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface User {
  name: string
  avatar: string
  account: number
}

export interface Star {
  icon: string
}

export interface Action {
  name: string
  icon: string
  starCount: number
  status: string
}

export interface Reward {
  name: string
  price: number
  status: string
}
