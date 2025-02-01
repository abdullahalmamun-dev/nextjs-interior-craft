import { Card } from "@/components/ui/card";

export default function WhyChooseUs() {
    return (
      <section id="why-choose-us" className="py-20 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-4">Why Choose Us?</h2>
          <p className="text-lg md:text-xl text-justify md:text-center mb-12 max-w-3xl mx-auto">
            With years of experience in the industry, our team offers expert design solutions tailored to your needs.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Designers</h3>
              <p className="text-justify">
                Our team of experienced designers brings creativity and innovation to every project. We ensure every space is
                designed to meet your needs and preferences.
              </p>
            </Card>
  
            <Card className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
              <p className="text-justify">
                We work closely with you to understand your style and preferences, creating a design that reflects your
                personality.
              </p>
            </Card>
  
            <Card className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">On-Time Delivery</h3>
              <p className="text-justify">
                We pride ourselves on delivering high-quality designs within the agreed timeline. Your satisfaction is our
                top priority.
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  