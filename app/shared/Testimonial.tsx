import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export default function Service() {
  return (
    <div id="testimonials" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 text-center mb-6">
          Client Testimonials
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Hear what our satisfied clients have to say about their experience with InteriorCraft. Our personalized approach
          to design has transformed homes, offices, and furniture pieces, bringing our clients&apos; visions to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="p-6 hover:shadow-2xl transition-shadow bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="mb-4 text-gray-600">
              &quot;InteriorCraft transformed our home beyond our expectations.
              Their attention to detail and understanding of our style was impressive. From the layout to the furniture
              selection, everything was perfect. We couldn&apos;t be happier with the results.&quot;
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-semibold text-xl">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Residential Client</p>
              </div>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-6 hover:shadow-2xl transition-shadow bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="mb-4 text-gray-600">
              &quot;The team&apos;s expertise in commercial design helped us create an office space that perfectly reflects our
              brand identity. Their thoughtful approach to layout and design inspired collaboration and creativity within
              our team. It’s now the perfect environment for productivity.&quot;
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-semibold text-xl">Michael Chen</h4>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-6 hover:shadow-2xl transition-shadow bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="mb-4 text-gray-600">
              &quot;The custom furniture pieces they designed fit perfectly in our
              space and added that unique touch we were looking for. We love how everything was crafted to fit our needs.
              It truly made our home feel personalized and stylish.&quot;
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-semibold text-xl">Emma Thompson</h4>
                <p className="text-sm text-gray-500">Custom Furniture Client</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
