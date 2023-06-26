import { createRandomGyms } from '~/factories/mockGymFactory'
import type { Gym } from '~/models/gym'

export abstract class GymService {
  abstract retrieveGyms(): Gym[]
}

export class MockGymService implements GymService {
  retrieveGyms(): Gym[] {
    // const gym1: Gym = { id: '1', city: 'Rennes', name: 'Jomaud' }
    // const gym2: Gym = { id: '2', city: 'Senner', name: 'Four' }
    return createRandomGyms()
  }
}
