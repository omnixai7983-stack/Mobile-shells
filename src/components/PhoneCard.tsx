import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

interface PhoneCardProps {
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  specs: string[];
  rating: number;
}

export const PhoneCard = ({
  name,
  image,
  originalPrice,
  discountedPrice,
  specs,
  rating
}: PhoneCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--hover-shadow)] transition-all duration-300 border-border overflow-hidden">
      <CardHeader className="p-0 relative">
        <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground font-bold text-sm px-3 py-1">
          48% OFF
        </Badge>
        <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
          <img
            src={image}
            alt={`${name} - Latest smartphone with premium features`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-primary text-primary" : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
        <ul className="space-y-1 mb-4">
          {specs.map((spec, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {spec}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-foreground">
            ${discountedPrice}
          </span>
          <span className="text-lg text-muted-foreground line-through">
            ${originalPrice}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
