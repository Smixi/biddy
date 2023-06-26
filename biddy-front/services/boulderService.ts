import type { Boulder, BoulderId } from '~/models/boulder'
import { createRandomBoulders } from '~/factories/mockBoulderFactory'

export abstract class BoulderService {
  abstract retrieveBoulders(): Boulder[]
  abstract retrieveBoulder(boulderId: BoulderId): Boulder
}

export class MockBoulderService implements BoulderService {
  boulders: Boulder[] = createRandomBoulders()

  retrieveBoulders(): Boulder[] {
    // const boulder1: Boulder = { grade: BoulderGrade.MYSTERY, id: 'boulder1', name: 'Le Pic de Nick', strength: 10, reading: 2, technique: 3, category: [], liked: 1, publishedAt: new Date() }
    // const boulder2: Boulder = { grade: BoulderGrade.V4, id: 'boulder2', name: 'Le Pic de Nick 2', strength: 10, reading: 2, technique: 3, category: [], liked: 1, publishedAt: new Date() }
    return this.boulders
  }

  retrieveBoulder(boulderId: string): Boulder {
    const boulder = this.boulders.find(boulder => boulder.id === boulderId)
    if (boulder === undefined)
      throw new Error('Boulder id not found')
    return boulder
  }
}
