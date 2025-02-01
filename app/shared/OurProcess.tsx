import { Card } from "@/components/ui/card";

export default function OurProcess() {
    return (
      <section id="our-process" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-6">Our Process</h2>
          <p className="text-lg md:text-xl text-justify md:text-center mb-12 max-w-3xl mx-auto">
            We follow a step-by-step process to bring your design vision to life. From consultation to execution, we ensure
            the journey is smooth and transparent.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Consultation</h3>
              <p className="text-justify">
                We begin by understanding your needs, preferences, and style. This step helps us gather important information
                to create a personalized design plan.
              </p>
            </Card>
  
            <Card className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Design Concept</h3>
              <p className="text-justify">
                Based on your inputs, we create a design concept that includes mood boards, color schemes, and layout
                options. You get to review and provide feedback before we move forward.
              </p>
            </Card>
  
            <Card className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3: Execution</h3>
              <p className="text-justify">
                Once the design is finalized, we begin the execution process. Our team will handle all the details, from
                sourcing materials to overseeing installation, ensuring the design comes to life seamlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  