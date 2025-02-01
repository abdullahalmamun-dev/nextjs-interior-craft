import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon, Building2Icon, ChevronRightIcon, HomeIcon, PaintbrushIcon, PaletteIcon, SofaIcon } from "lucide-react";

export default function Service() {

  return (
    <div id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        We offer comprehensive interior design solutions tailored to your
        unique style and needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Residential Design */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <HomeIcon className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Residential Design</h3>
          <p className="text-muted-foreground mb-4">
            Transform your home into a stunning sanctuary with our expert
            residential design services.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Living Spaces
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Bedrooms
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Kitchens
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Bathrooms
            </li>
          </ul>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Card>

        {/* Commercial Design */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Building2Icon className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Commercial Design</h3>
          <p className="text-muted-foreground mb-4">
            Create inspiring workspaces that boost productivity and impress
            clients.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Offices
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Retail Spaces
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Restaurants
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Hotels
            </li>
          </ul>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Card>

        {/* Custom Furniture */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <SofaIcon className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Custom Furniture</h3>
          <p className="text-muted-foreground mb-4">
            Unique, made-to-measure furniture pieces that perfectly fit your
            space.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Seating
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Storage
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Tables
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Lighting
            </li>
          </ul>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Card>

        {/* Consultation */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <PaletteIcon className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consultation</h3>
          <p className="text-muted-foreground mb-4">
            Expert advice and planning to bring your design vision to life.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Color Selection
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Space Planning
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Material Selection
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-primary mr-2" />
              Project Management
            </li>
          </ul>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Card>
      </div>
    </div>
  </div>
  )
}