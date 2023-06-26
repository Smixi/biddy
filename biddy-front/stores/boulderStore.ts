import { defineStore } from 'pinia'
import { DefaultStoreNames } from './storeNames'
import type { Boulder, BoulderId } from '~/models/boulder'

const boulderService = useBoulderService()

export const useBoulderStore = defineStore(DefaultStoreNames.BOULDER, () => {
  const boulders: Ref<Boulder[]> = ref([])
  const currentBoulder: Ref<Boulder | null> = ref(null)

  function setBoulders(newBoulders: Boulder[]) {
    boulders.value = newBoulders
  }

  function setCurrentBoulder(newBoulder: Boulder) {
    currentBoulder.value = newBoulder
  }

  function retrieveBoulders() {
    const retrieved = boulderService?.retrieveBoulders()
    setBoulders(retrieved)
    // TODO: Handle error
  }

  function retrieveBoulder(boulderId: BoulderId) {
    const retrieved = boulderService?.retrieveBoulder(boulderId)
    setCurrentBoulder(retrieved)
  }

  return { boulders, currentBoulder, setBoulders, setCurrentBoulder, retrieveBoulders, retrieveBoulder }
})
