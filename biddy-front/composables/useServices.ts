import { MockServiceProvider } from "~/services/serviceProvider"

const provider = new MockServiceProvider() // TODO: Make this in a factory function in config.
const services = provider.getServices()
export const useBoulderService = () => { return services.boulderService }
