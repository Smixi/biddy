import { Gym } from '~/models/gym';

export abstract class GymService {

  abstract retrieveGyms(): Gym[]

}

export class MockGymService implements GymService{
  
  retrieveGyms(): Gym[] {
    const gym1: Gym = {city: 'Rennes', name: 'Jomaud'}
    const gym2: Gym = {city: 'Rennes', name: 'Four'}
    return [gym1, gym2];
    
  }

}
