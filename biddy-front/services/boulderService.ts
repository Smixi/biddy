import { BoulderGrade } from '~/models/boulder';
import { Boulder } from '~/models/boulder'

export abstract class BoulderService {

  abstract retrieveBoulders(): Boulder[]

}

export class MockBoulderService implements BoulderService{
  
  retrieveBoulders(): Boulder[] {
    const boulder1: Boulder = {grade: BoulderGrade.MYSTERY, id: "boulder1", name: "Le Pic de Nick", strength: 10, reading: 2, technique: 3, category: [], liked: 1};
    const boulder2: Boulder = {grade: BoulderGrade.V4, id: "boulder2", name: "Le Pic de Nick 2", strength: 10, reading: 2, technique: 3, category: [], liked: 1};
    return [boulder1, boulder2];
    
  }

}
