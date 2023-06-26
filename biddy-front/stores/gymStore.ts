import { defineStore } from 'pinia'
import { DefaultStoreNames } from './storeNames'
import type { Gym } from '~/models/gym'

const gymService = useGymService()

export const useGymStore = defineStore(DefaultStoreNames.GYM, () => {
  const gyms: Ref<Gym[]> = ref([])
  const currentGym: Ref<Gym | {}> = ref({})

  function setGyms(newGyms: Gym[]) {
    gyms.value = newGyms
  }

  function setCurrentGym(newGym: Gym) {
    currentGym.value = newGym
  }

  function retrieveGyms() {
    const retrieved = gymService?.retrieveGyms()
    if (retrieved !== undefined)
      setGyms(retrieved)

    // TODO: Handle error
  }

  return { gyms, currentGym, setGyms, setCurrentGym, retrieveGyms }
})
