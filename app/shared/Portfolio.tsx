import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ArrowRightIcon, Building2Icon, ChevronRightIcon, HomeIcon, PaintbrushIcon, PaletteIcon, SofaIcon } from "lucide-react";
import Image from "next/image";

export default function Service() {

  return (
    <div id="portfolio" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Explore our collection of thoughtfully designed spaces and custom
        solutions
      </p>

      <Tabs defaultValue="residential" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 lg:w-[400px] mx-auto mb-8">
          <TabsTrigger value="residential">Residential</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="furniture">Furniture</TabsTrigger>
          <TabsTrigger value="consultation">Consultation</TabsTrigger>
        </TabsList>

        <TabsContent value="residential">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Residential Projects */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">

                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                  alt="Modern living room"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Modern Minimalist Living Room
                </h3>
                <p className="text-sm text-muted-foreground">
                  A clean, contemporary design focusing on functionality and
                  style.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
                  alt="Luxury bedroom"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Luxury Master Bedroom
                </h3>
                <p className="text-sm text-muted-foreground">
                  An elegant retreat with custom furnishings and lighting.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77"
                  alt="Contemporary kitchen"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Contemporary Kitchen Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  A perfect blend of functionality and modern aesthetics.
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Commercial Projects */}
        <TabsContent value="commercial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                  alt="Modern office space"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Tech Startup Office</h3>
                <p className="text-sm text-muted-foreground">
                  A dynamic workspace designed for collaboration and
                  creativity.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                  alt="Boutique retail store"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Luxury Retail Space</h3>
                <p className="text-sm text-muted-foreground">
                  An inviting retail environment that enhances the shopping
                  experience.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                  alt="Restaurant interior"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Fine Dining Restaurant
                </h3>
                <p className="text-sm text-muted-foreground">
                  An atmospheric dining space that elevates the culinary
                  experience.
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Furniture Projects */}
        <TabsContent value="furniture">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                  alt="Custom sofa"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Bespoke Seating Collection
                </h3>
                <p className="text-sm text-muted-foreground">
                  Custom-designed sofas and chairs for maximum comfort and
                  style.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1505693314120-0d443867891c"
                  alt="Dining table"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Artisan Dining Table</h3>
                <p className="text-sm text-muted-foreground">
                  Hand-crafted dining tables that become the heart of your
                  home.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1530603907829-659dc8ec3682"
                  alt="Storage solution"
                  className="object-cover w-full h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Modern Storage Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Innovative storage designs that combine functionality with
                  aesthetics.
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  )
}