import { defineStore } from 'pinia'
import { Boulder } from '~/models/boulder';
import { DefaultStoreNames } from './storeNames';

const boulderService = useBoulderService()

export const useBoulderStore = defineStore(DefaultStoreNames.BOULDER, () => {

  const boulders: Ref<Boulder[]> = ref([]);
  const currentBoulder: Ref<Boulder | {}> = ref({})

  function setBoulders(newBoulders: Boulder[]){
    boulders.value = newBoulders;
  }

  function setCurrentBoulder(newBoulder: Boulder){
    currentBoulder.value = newBoulder;
  }

  function retrieveBoulders(){
    const retrieved = boulderService?.retrieveBoulders()
    if(retrieved !== undefined){
      setBoulders(retrieved)
    }
    // TODO: Handle error
  }

  return { boulders, currentBoulder, setBoulders, setCurrentBoulder, retrieveBoulders }
  
})
