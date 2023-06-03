import { BoulderService, MockBoulderService } from "./boulderService";

interface Services {
  boulderService: BoulderService
}

abstract class ServicesProvider {
  
  services: Services

  abstract getServices(): Services
  
  constructor(){
    this.services = this.getServices()
  }
}

export class MockServiceProvider extends ServicesProvider {
  getServices(): Services {
    return { boulderService: new MockBoulderService()}
  }
}
