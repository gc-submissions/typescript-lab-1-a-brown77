export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  let tallestMountain: Mountain = mountains[0];
  mountains.forEach((mountain: Mountain) => {
    if (tallestMountain.height < mountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
}

let tallestMountainName: string = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
