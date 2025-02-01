import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-4">About Us</h2>
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
          We are a passionate interior design team dedicated to transforming spaces into beautiful, functional environments.
          Our designs reflect your unique style and needs, ensuring every project is personalized to perfection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p>
              Our vision is to create spaces that not only look beautiful but also feel like home. We strive to enhance the
              quality of life and culture through meaningful design that reflects the personality and needs of our clients.
            </p>
          </Card>

          <Card className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p>
              We value creativity, functionality, and attention to detail. Our team works closely with you to ensure that
              every design element is in harmony with your lifestyle.
            </p>
          </Card>

          <Card className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">The Team</h3>
            <p>
              Our team of expert designers brings years of experience and a deep passion for design. We are committed to
              bringing your vision to life through collaboration and innovation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
