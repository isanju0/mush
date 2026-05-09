import { useEffect, useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import { products } from "../assets/constants";
import ProductCard from "../components/ProductCard";
import SectionWrapper from "../components/SectionWrapper";

function ProductsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper
      id="products"
      eyebrow="Fresh Selection"
      title="Our Popular Mushrooms"
      subtitle="Carefully cultivated and harvested at peak freshness. Perfect for everyday cooking and premium dishes."
    >
      <Grid ref={sectionRef} container spacing={{ xs: 2, md: 2.4 }} style={{ justifyContent: "space-between" }}>
        {products.map((product, index) => (
          <Grid
            key={product.name}
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex" }}
          >
            <Box
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(26px)",
                transition: "opacity 700ms ease, transform 700ms ease",
                transitionDelay: `${120 * index}ms`,
                height: "100%",
                width: "100%",
              }}
            >
              <ProductCard {...product} bestSeller={index < 2} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default ProductsSection;
