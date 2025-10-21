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
import phone7 from "@/assets/phone-7.jpg";
import phone8 from "@/assets/phone-8.jpg";
import phone9 from "@/assets/phone-9.jpg";
import phone10 from "@/assets/phone-10.jpg";

const phones = [
  {
    name: "Apple iPhone 17 Pro",
    image: phone1,
    originalPrice: 1399,
    discountedPrice: 713,
    specs: ["6.7\" Super Retina XDR", "48MP Pro Camera System", "A18 Pro Chip", "8GB RAM"],
    rating: 5
  },
  {
    name: "OnePlus 13s 5G",
    image: phone2,
    originalPrice: 1099,
    discountedPrice: 560,
    specs: ["6.82\" AMOLED Display", "50MP Hasselblad Camera", "150W SuperVOOC", "16GB RAM"],
    rating: 5
  },
  {
    name: "Oppo Premium 5G",
    image: phone3,
    originalPrice: 1199,
    discountedPrice: 611,
    specs: ["6.7\" AMOLED Display", "50MP Quad Camera", "100W SuperVOOC", "12GB RAM"],
    rating: 5
  },
  {
    name: "Samsung Galaxy A56 5G",
    image: phone4,
    originalPrice: 599,
    discountedPrice: 305,
    specs: ["6.6\" Super AMOLED", "50MP Triple Camera", "5000mAh Battery", "8GB RAM"],
    rating: 4
  },
  {
    name: "Realme 14 Pro+ 5G",
    image: phone5,
    originalPrice: 799,
    discountedPrice: 407,
    specs: ["6.7\" AMOLED Display", "200MP OIS Camera", "120W HyperCharge", "12GB RAM"],
    rating: 5
  },
  {
    name: "Redmi Note 14 5G",
    image: phone6,
    originalPrice: 499,
    discountedPrice: 254,
    specs: ["6.67\" AMOLED Display", "108MP Camera", "5000mAh Battery", "8GB RAM"],
    rating: 4
  },
  {
    name: "Nothing Phone 5G",
    image: phone7,
    originalPrice: 899,
    discountedPrice: 458,
    specs: ["6.55\" OLED Display", "50MP Dual Camera", "Glyph Interface", "12GB RAM"],
    rating: 5
  },
  {
    name: "Oppo Reno 14 5G",
    image: phone8,
    originalPrice: 749,
    discountedPrice: 382,
    specs: ["6.7\" AMOLED Display", "64MP Portrait Camera", "80W SuperVOOC", "12GB RAM"],
    rating: 4
  },
  {
    name: "Samsung Galaxy S22 Ultra 5G",
    image: phone9,
    originalPrice: 1199,
    discountedPrice: 611,
    specs: ["6.8\" Dynamic AMOLED", "108MP Quad Camera", "S Pen Integrated", "12GB RAM"],
    rating: 5
  },
  {
    name: "OnePlus 13s 5G",
    image: phone10,
    originalPrice: 1099,
    discountedPrice: 560,
    specs: ["6.82\" Fluid AMOLED", "50MP Hasselblad Triple Camera", "100W Fast Charge", "16GB RAM"],
    rating: 5
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
              LIMITED TIME OFFER - 49% OFF
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
                  <p className="text-sm text-muted-foreground">Up to 49%</p>
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
            Discover the latest flagship devices with premium features and unbeatable 49% discount
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
