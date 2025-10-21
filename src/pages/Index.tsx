import { PhoneCard } from "@/components/PhoneCard";
import { AdSpace } from "@/components/AdSpace";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, Shield, TrendingUp } from "lucide-react";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";
import phone4 from "@/assets/phone-4.jpg";
import phone5 from "@/assets/phone-5.jpg";
import phone6 from "@/assets/phone-6.jpg";

const phones = [
  {
    name: "Galaxy Ultra Pro Max",
    image: phone1,
    originalPrice: 1299,
    discountedPrice: 675,
    specs: ["6.8\" AMOLED Display", "200MP Triple Camera", "5000mAh Battery", "12GB RAM"],
    rating: 5
  },
  {
    name: "iPhone Zenith Elite",
    image: phone2,
    originalPrice: 1199,
    discountedPrice: 623,
    specs: ["6.7\" Super Retina XDR", "48MP Pro Camera", "A17 Pro Chip", "8GB RAM"],
    rating: 5
  },
  {
    name: "Pixel Vision X",
    image: phone3,
    originalPrice: 999,
    discountedPrice: 519,
    specs: ["6.5\" OLED Display", "50MP AI Camera", "Tensor G4 Chip", "12GB RAM"],
    rating: 4
  },
  {
    name: "OnePlus Quantum 12",
    image: phone4,
    originalPrice: 899,
    discountedPrice: 467,
    specs: ["6.7\" Fluid AMOLED", "64MP Hasselblad Camera", "150W Fast Charge", "16GB RAM"],
    rating: 5
  },
  {
    name: "Xiaomi Fusion Pro",
    image: phone5,
    originalPrice: 799,
    discountedPrice: 415,
    specs: ["6.67\" AMOLED Display", "108MP Camera", "120W HyperCharge", "12GB RAM"],
    rating: 4
  },
  {
    name: "Realme Apex Ultra",
    image: phone6,
    originalPrice: 699,
    discountedPrice: 363,
    specs: ["6.6\" Super AMOLED", "50MP Sony Camera", "5000mAh Battery", "8GB RAM"],
    rating: 4
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-destructive text-destructive-foreground text-lg px-6 py-2 font-bold">
              LIMITED TIME OFFER - 48% OFF
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              New Launch Phones
              <span className="block text-primary mt-2">Mega Sale Event</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest flagship smartphones at unbeatable prices. Premium quality, cutting-edge technology, massive savings!
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">2-3 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Warranty</p>
                  <p className="text-sm text-muted-foreground">2 Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Save Big</p>
                  <p className="text-sm text-muted-foreground">Up to 48%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Ad Space - Top Banner */}
      <section className="container mx-auto px-4">
        <AdSpace slot="1234567890" format="horizontal" />
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Smartphone className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Featured Smartphones</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest flagship devices with premium features and unbeatable 48% discount
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phones.map((phone, index) => (
            <PhoneCard key={index} {...phone} />
          ))}
        </div>
      </section>

      {/* Ad Space - Middle Banner */}
      <section className="container mx-auto px-4">
        <AdSpace slot="0987654321" format="rectangle" />
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 PhoneDeals. All rights reserved. Prices and availability subject to change.
          </p>
          <p className="text-sm text-muted-foreground">
            All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </footer>

      {/* Ad Space - Bottom Banner */}
      <section className="container mx-auto px-4 pb-8">
        <AdSpace slot="1122334455" format="horizontal" />
      </section>
    </main>
  );
};

export default Index;
