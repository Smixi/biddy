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
  V11 = 11,
  V12 = 12,
  V13 = 13,
  V14 = 14,
  MYSTERY = -1
}

export type BoulderCategory = string

export interface Boulder {
  id: string;
  name: string;
  grade: BoulderGrade;
  strength: number;
  technique: number;
  reading: number;
  category: BoulderCategory[];
  liked: number;
}
