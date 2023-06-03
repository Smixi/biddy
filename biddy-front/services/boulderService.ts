import { BoulderGrade } from '~/models/boulder';
import { Boulder } from '~/models/boulder'

export abstract class BoulderService {

  abstract retrieveBoulders(): Boulder[]

}

export class MockBoulderService implements BoulderService{
  
  retrieveBoulders(): Boulder[] {
    const boulder1: Boulder = {grade: BoulderGrade.MYSTERY, id: "boulder1", name: "Le Pic de Nick", strength: 10, reading: 2, technique: 3, category: [], liked: 1};
    return [boulder1];
    
  }

}
