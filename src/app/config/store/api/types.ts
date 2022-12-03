export interface Conjugare {
  verb: string;
  grupa: string;
  conjugarea: string;
  infinitivLung: string;
  participiu: string;
  gerunziu: string;
  imperativ: {
    sg: string;
    pl: string;
  };
  prezent: string[];
  conjunctivPrezent: string[];
  imperfect: string[];
  perfectSimplu: string[];
  maiMultCaPerfect: string[];
}
