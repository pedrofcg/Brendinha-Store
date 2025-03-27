import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { ProductGrid } from '../components/ProductGrid';

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid />
    </>
  );
}