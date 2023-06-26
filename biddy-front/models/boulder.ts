import type { Gym } from './gym'
import type { User } from './users'

export enum BoulderGrade {
  V0 = 1,
  V1 = 2,
  V2 = 3,
  V3 = 4,
  V4 = 5,
  V5 = 6,
  V6 = 7,
  V7 = 8,
  V8 = 9,
  V9 = 10,
  V10 = 11,
  V11 = 12,
  V12 = 13,
  V13 = 14,
  V14 = 15,
  MYSTERY = -1,
}

export type BoulderCategory = string

export type BoulderId = string

export interface Boulder {
  id: BoulderId
  name: string
  grade: BoulderGrade
  category: BoulderCategory[]
  liked: number
  publishedAt: Date
  pictureUrl: string
  rating: BoulderRating
  live: boolean
}

export interface BoulderRating {
  strength: number
  technique: number
  reading: number
  dynamic: number
  footwork: number
  fingerStrength: number
}

export interface BoulderWithRelation extends Boulder {
  publishedBy: User
  gym: Gym
}
