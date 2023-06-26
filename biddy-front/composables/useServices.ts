import { MockServiceProvider } from '~/services/serviceProvider'

const provider = new MockServiceProvider() // TODO: Make this in a factory function in config.
const services = provider.getServices()
const useBoulderService = function () {
  return services.boulderService
}
const useGymService = function () {
  return services.gymService
}

export { useBoulderService, useGymService }
