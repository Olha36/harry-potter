export default interface Types {
    id: string;
      name: string;
      alternate_names: string[];
      species: string;
      gender: string;
      house: string;
      dateOfBirth: string;
      wizard: boolean;
      ancestry: string;
      eyeColour: string;
      hairColour: string;
      patronus: string;
      hogwartsStudent: boolean;
      hogwartsStaff: boolean;
      actor: string;
      image: string;
      wand: {
        wood: string;
        core: string;
        length: number | null;
      };
      hogwartStudent: boolean;
  }