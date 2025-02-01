"use client";

import { useState } from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Paintbrush,
  Home,
  Building2,
  Sofa,
  Palette,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star
} from "lucide-react";

export default function Home() {
  const [activePortfolioTab, setActivePortfolioTab] = useState("residential");

  return (
    <main className="min-h-screen">
      {/* Header - Keeping the existing header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Paintbrush className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">InteriorCraft</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button className="hidden md:inline-flex">Book Consultation</Button>
          <Button variant="ghost" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section - Keeping the existing hero */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Space<br />With Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Elevate your living and working spaces with our expert interior design services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive interior design solutions tailored to your unique style and needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Residential Design */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Residential Design</h3>
              <p className="text-muted-foreground mb-4">
                Transform your home into a stunning sanctuary with our expert residential design services.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Living Spaces
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Bedrooms
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Kitchens
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Bathrooms
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>

            {/* Commercial Design */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commercial Design</h3>
              <p className="text-muted-foreground mb-4">
                Create inspiring workspaces that boost productivity and impress clients.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Offices
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Retail Spaces
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Restaurants
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Hotels
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>

            {/* Custom Furniture */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Sofa className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Furniture</h3>
              <p className="text-muted-foreground mb-4">
                Unique, made-to-measure furniture pieces that perfectly fit your space.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Seating
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Storage
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Tables
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Lighting
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>

            {/* Consultation */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Palette className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Expert advice and planning to bring your design vision to life.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Color Selection
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Space Planning
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Material Selection
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  Project Management
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed spaces and custom solutions
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
                    <img
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                      alt="Modern living room"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Modern Minimalist Living Room</h3>
                    <p className="text-sm text-muted-foreground">A clean, contemporary design focusing on functionality and style.</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
                      alt="Luxury bedroom"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Luxury Master Bedroom</h3>
                    <p className="text-sm text-muted-foreground">An elegant retreat with custom furnishings and lighting.</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77"
                      alt="Contemporary kitchen"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Contemporary Kitchen Design</h3>
                    <p className="text-sm text-muted-foreground">A perfect blend of functionality and modern aesthetics.</p>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Add similar TabsContent for commercial, furniture, and consultation */}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                "InteriorCraft transformed our home beyond our expectations. Their attention to detail and understanding of our style was impressive."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Residential Client</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                "The team's expertise in commercial design helped us create an office space that perfectly reflects our brand identity."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Business Owner</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                "The custom furniture pieces they designed fit perfectly in our space and added that unique touch we were looking for."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Emma Thompson</h4>
                  <p className="text-sm text-muted-foreground">Custom Furniture Client</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with our team of experts
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">contact@interiorcraft.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">123 Design Street, Creative City, ST 12345</p>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}