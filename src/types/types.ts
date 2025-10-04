import type { FC } from "react";

export type ReviewsType = {
  id: number;
  name: string;
  location: string;
  date: string;
  text: string;
  src: string;
  stars: number;
}

export type NavItem = { 
    id: string; 
    label: string; 
    href: string 
};

export type BenefitsItem = { 
    id: string; 
    title: string; 
    img: string; 
    label: string;
};

export type DriversPerson = { 
    id: string, 
    name: string, 
    experience: number, 
    instagram: string, 
    linkedin: string, 
    img: string
};

export type ServicesItem = {
    id: string, 
    title: string, 
    img: string
}

export type CountryItem = {
    id: string, 
    title: string, 
    Flag: FC<any>
}