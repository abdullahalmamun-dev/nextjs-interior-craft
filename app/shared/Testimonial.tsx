import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export default function Service() {

  return (
    <div id="testimonials" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Client Testimonials
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Hear what our satisfied clients have to say about their experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">
            &quot;InteriorCraft transformed our home beyond our expectations.
            Their attention to detail and understanding of our style was
            impressive.&quot;
          </p>
          <div className="flex items-center">
            <div>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <p className="text-sm text-muted-foreground">
                Residential Client
              </p>
            </div>
          </div>
        </Card>

        {/* Testimonial 2 */}
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">
            &quot;The team&apos;s expertise in commercial design helped us create an
            office space that perfectly reflects our brand identity.&quot;
          </p>
          <div className="flex items-center">
            <div>
              <h4 className="font-semibold">Michael Chen</h4>
              <p className="text-sm text-muted-foreground">
                Business Owner
              </p>
            </div>
          </div>
        </Card>

        {/* Testimonial 3 */}
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">
            &quot;The custom furniture pieces they designed fit perfectly in our
            space and added that unique touch we were looking for.&quot;
          </p>
          <div className="flex items-center">
            <div>
              <h4 className="font-semibold">Emma Thompson</h4>
              <p className="text-sm text-muted-foreground">
                Custom Furniture Client
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
  )
}