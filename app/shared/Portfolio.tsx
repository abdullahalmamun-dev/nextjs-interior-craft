import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  ArrowRightIcon,
  Building2Icon,
  ChevronRightIcon,
  HomeIcon,
  PaintbrushIcon,
  PaletteIcon,
  SofaIcon,
} from "lucide-react";
import Image from "next/image";
import storage from "../src/photo-1463717738788-85fcacb6ac3d.avif"
import space from "../src/Consultation Space.jpg";
import planning from "../src/Space Planning.jpg";
import Design from "../src/Custom Design.jpg";

export default function Service() {
  return (
    <div
      id="portfolio"
      className="py-20 bg-gradient-to-r from-purple-700 to-pink-600"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4">
          Our Portfolio
        </h2>
        <p className="text-lg md:text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          Explore our collection of thoughtfully designed spaces and custom
          solutions. From residential to commercial design, we create
          personalized spaces that inspire and elevate the way you live and
          work.
        </p>

        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 lg:w-[400px] mx-auto mb-8">
            <TabsTrigger
              value="residential"
              className="text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Residential
            </TabsTrigger>
            <TabsTrigger
              value="commercial"
              className="text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Commercial
            </TabsTrigger>
            <TabsTrigger
              value="furniture"
              className="text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Furniture
            </TabsTrigger>
            <TabsTrigger
              value="consultation"
              className="text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Consultation
            </TabsTrigger>
          </TabsList>

          {/* Residential Projects */}
          <TabsContent value="residential">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                    alt="Modern living room"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Modern Minimalist Living Room
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A clean, contemporary design focusing on functionality and
                    style. We created a balanced and harmonious space with
                    neutral tones and stylish furniture.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
                    alt="Luxury bedroom"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Luxury Master Bedroom
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A luxury master bedroom designed for comfort and relaxation.
                    We used premium materials, customized furnishings, and
                    accent lighting to create a truly elegant space.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77"
                    alt="Contemporary kitchen"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Contemporary Kitchen Design
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A perfect blend of modern design and practicality. This
                    kitchen maximizes space and enhances functionality while
                    maintaining an elegant and stylish look.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Commercial Projects */}
          <TabsContent value="commercial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                    alt="Modern office space"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Tech Startup Office
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A dynamic workspace designed for collaboration and
                    creativity. We designed an open-plan layout with
                    contemporary furniture and lots of natural light.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                    alt="Boutique retail store"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Luxury Retail Space
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    An inviting retail environment that enhances the shopping
                    experience. The design focuses on creating an engaging
                    atmosphere that invites customers to explore.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                    alt="Restaurant interior"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Fine Dining Restaurant
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    An atmospheric dining space designed to enhance the culinary
                    experience. The design is focused on creating a luxurious
                    and intimate dining environment.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Furniture Projects */}
          <TabsContent value="furniture">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                    alt="Custom sofa"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Bespoke Seating Collection
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Custom-designed sofas and chairs that offer both maximum
                    comfort and style. Perfect for any modern home or office.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1505693314120-0d443867891c"
                    alt="Dining table"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Artisan Dining Table
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Hand-crafted dining tables that are the perfect centerpiece
                    for your dining room, combining style and durability.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src={storage}
                    alt="Storage solution"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Modern Storage Solutions
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Innovative storage designs that combine functionality with
                    aesthetics. Perfect for maximizing space in any room.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Consultation Projects */}
          <TabsContent value="consultation">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src={space}
                    alt="Consultation Space"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Design Consultation
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our expert team provides personalized design consultations
                    to help you bring your vision to life.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Understanding Your Needs
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Personalized Design Plan
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Expert Guidance on Materials and Layouts
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Ongoing Support for Your Design Project
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Schedule a Consultation
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src={planning}
                    alt="Interior Consultation"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Space Planning Consultation
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our team will help you optimize your space with creative
                    solutions that maximize functionality and flow.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Space Optimization Strategies
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Layout and Flow Planning
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Furniture Arrangement Recommendations
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Lighting and Ambience Consultation
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Schedule a Consultation
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white rounded-lg">
                <div className="aspect-video relative">
                  <Image
                    src={Design}
                    alt="Custom Design Consultation"
                    className="object-cover w-full h-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    Custom Design Consultation
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Work with our designers to create unique pieces that are
                    perfectly suited to your space and taste.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Custom Furniture Design
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Tailored Color and Material Selections
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Concept to Execution Support
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="h-5 w-5 text-primary mr-3" />
                      Design Style Guidance and Personalization
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Schedule a Consultation
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
