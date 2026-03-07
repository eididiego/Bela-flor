import React from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'roses' | 'sunflowers' | 'chocolates' | 'kits';
  imagePlaceholder: string;
  checkoutUrl: string;
  bestSeller?: boolean;
  soldOut?: boolean;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  googleMapsLink: string;
  hours: string; // Simplified for display
  phone: string;
  whatsapp: string;
  image: string;
}

export interface Benefit {
  icon: React.ReactNode;
  text: string;
}

export interface Occasion {
  title: string;
  description: string;
  iconName: string;
}