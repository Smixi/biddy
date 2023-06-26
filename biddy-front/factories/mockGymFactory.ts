import { faker } from '@faker-js/faker'
import type { Gym } from '~/models/gym'

export function createRandomGym(): Gym {
  return {
    id: faker.string.uuid(),
    city: faker.location.city(),
    name: faker.company.name(),
    logoUrl: faker.image.urlPicsumPhotos(),
  }
}

const range = function (n: number): number[] {
  return [...Array(n).keys()]
}

export function createRandomGyms(number = 10): Gym[] {
  return range(number).map(() => {
    return createRandomGym()
  })
}
