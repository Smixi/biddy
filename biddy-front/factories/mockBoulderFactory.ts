import { faker } from '@faker-js/faker'
import { type Boulder, BoulderGrade } from '~/models/boulder'

export function createRandomBoulder(): Boulder {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    category: [],
    grade: faker.helpers.arrayElement([BoulderGrade.V0, BoulderGrade.V1, BoulderGrade.V2, BoulderGrade.V3, BoulderGrade.V4, BoulderGrade.V5, BoulderGrade.V8, BoulderGrade.V10]),
    liked: faker.number.int(15),
    rating: {
      technique: faker.number.float(10),
      strength: faker.number.float(10),
      reading: faker.number.float(10),
      dynamic: faker.number.float(10),
      fingerStrength: faker.number.float(10),
      footwork: faker.number.float(10),
    },
    publishedAt: faker.date.recent(),
    pictureUrl: faker.image.urlPlaceholder({ width: 500, height: 600 }),
  }
}

const range = function (n: number): number[] {
  return [...Array(n).keys()]
}

export function createRandomBoulders(number = 10): Boulder[] {
  return range(number).map(() => {
    return createRandomBoulder()
  })
}
