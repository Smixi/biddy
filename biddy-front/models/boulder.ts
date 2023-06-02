enum BoulderGrade {
  V0,
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  V11,
  V12,
  V13,
  V14,
  MYSTERY
}

export type BoulderCategory = string

export interface Boulder {
  id: string;
  name: string;
  grade: BoulderGrade;
  strength: number;
  technique: number;
  balance: number;
  category: [BoulderCategory];
}

