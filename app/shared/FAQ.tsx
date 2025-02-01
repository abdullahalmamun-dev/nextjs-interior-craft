export default function FAQ() {
    return (
      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-6">Frequently Asked Questions</h2>
          <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
            Here are some of the most frequently asked questions about our interior design services. If you have other
            questions, feel free to contact us.
          </p>
  
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">How long does a project take?</h3>
              <p>
                The timeline depends on the size and complexity of the project. Typically, residential projects take 4-6
                weeks, while larger commercial projects can take a few months.
              </p>
            </div>
  
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">What is the cost of your services?</h3>
              <p>
                Our pricing varies based on the scope of the project. We provide detailed quotes after the initial
                consultation to give you a clear idea of the costs involved.
              </p>
            </div>
  
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Do you provide furniture?</h3>
              <p>
                Yes! We offer custom furniture design and can help source or create unique pieces that fit your space.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  