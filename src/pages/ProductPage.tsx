import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Order from '../components/Order';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import ProductSkeleton from '../components/ProductSkeleton';
import { getActiveProducts } from '../services/api';
import { slugify } from '../utils/slugify';
import type { Product } from '../types/product.types';

const MIN_LOADING_TIME = 800; // ms — évite le clignotement du skeleton

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);

    const load = async () => {
      const startTime = Date.now();

      try {
        const products = await getActiveProducts();

        let found: Product | null = null;
        let isNotFound = false;

        if (!slug) {
          if (products.length > 0) {
            found = products[0];
          } else {
            isNotFound = true;
          }
        } else {
          const match = products.find(p => slugify(p.title) === slug);
          if (match) {
            found = match;
          } else {
            isNotFound = true;
          }
        }

        // Garantit un minimum de temps d'affichage du skeleton
        const elapsed = Date.now() - startTime;
        const remaining = MIN_LOADING_TIME - elapsed;
        if (remaining > 0) {
          await new Promise(resolve => setTimeout(resolve, remaining));
        }

        if (isMounted) {
          setProduct(found);
          setNotFound(isNotFound);
        }
      } catch (err) {
        console.error('Failed to load products', err);
        if (isMounted) setNotFound(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) return <ProductSkeleton />;
  if (notFound || !product) return <NotFound />;

  return (
    <div>
      <Navbar product={product} />
      <Hero product={product} />
      <Details product={product} />
      <Gallery product={product} />
      <Testimonials />
      <Order product={product} />
      <Footer />
    </div>
  );
}