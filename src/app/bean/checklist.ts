export class Checklist {
    title:string;
    subparts:{
      name:string;
      steps:{libelle:string,desc: string}[];
    }[]
  }