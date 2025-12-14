import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How quickly can you reach me for emergency tyre fitting?",
      answer: "We aim to reach most locations within London and the M25 corridor within 30-60 minutes. Our strategically placed mobile units ensure rapid response times for emergencies."
    },
    {
      question: "Do you offer mobile tyre fitting at my workplace?",
      answer: "Yes! We can fit tyres at your home, workplace, or even while you're at the gym or shopping. All we need is a little space around your vehicle to work safely."
    },
    {
      question: "Are your mobile tyre prices more expensive than a garage?",
      answer: "Our prices are highly competitive and often cheaper than physical garages because we have lower overheads. The price we quote includes fitting, new valves, balancing, and old tyre disposal."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover Greater London, Hertfordshire, Bedfordshire, Buckinghamshire, and the M25/M1 corridors. Key areas include Watford, St Albans, Hemel Hempstead, Luton, and Barnet."
    },
    {
      question: "Can you repair a punctured tyre instead of replacing it?",
      answer: "Yes, we always try to repair punctures first if it's safe and legal (BS AU 159). If a repair isn't possible, we carry a range of replacement tyres to get you back on the road."
    },
    {
      question: "Do you operate on weekends and Bank Holidays?",
      answer: "Absolutely. We are a 24/7 service, operating 365 days a year, including weekends and Bank Holidays, for both emergency call-outs and scheduled fittings."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Have Questions?</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-gray-400 mt-4">Everything you need to know about our mobile tyre services.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-lg bg-secondary/30 px-6">
              <AccordionTrigger className="text-lg font-bold text-white hover:text-primary py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}