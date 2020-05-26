import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
   name : string;
   totalCapacityKg : number;
   cargoItems : Cargo[] = [];
   astronauts : Astronaut[] = [];

   constructor (name : string, totalCapicityKg : number) {
      this.name = name;
      this.totalCapacityKg = totalCapicityKg;
   }

   sumMass( items : Payload[] ): number {
      let sum : number = 0;
      for (let elem of items) {
         sum += elem.massKg;
      }
      return sum;
   }
   
   currentMassKg() : number {
      return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
   }

   canAdd( item : Payload ): boolean {
      return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
   }

   addCargo( cargo : Cargo ): boolean {
      if (this.canAdd(cargo)) {
         this.cargoItems.push(cargo);
         return true;
      } else {
         return false;
      }
   }

   addAstronaut( astronaut : Astronaut ): boolean {
      if (this.canAdd(astronaut)) {
         this.astronauts.push(astronaut);
         return true;
      } else {
         return false;
      }
   }
}