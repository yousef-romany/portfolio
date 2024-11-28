export interface routeTpes {
    id: number;
    label: string;
    path: string;
  }
  
  export const routes: routeTpes[] = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "About Me",
      path: "/about",
    },
    {
      id: 3,
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 4,
      label: "Contact Me",
      path: "/contact",
    },
  ];
  