import type { BoulderService } from './boulderService'
import { MockBoulderService } from './boulderService'
import type { GymService } from './gymService'
import { MockGymService } from './gymService'

interface Services {
  boulderService: BoulderService
  gymService: GymService
}

abstract class ServicesProvider {
  services: Services

  abstract getServices(): Services

  constructor() {
    this.services = this.getServices()
  }
}

export class MockServiceProvider extends ServicesProvider {
  getServices(): Services {
    return { boulderService: new MockBoulderService(), gymService: new MockGymService() }
  }
}
