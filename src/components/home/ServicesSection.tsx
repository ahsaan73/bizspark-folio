import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Shield, Zap, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Technical Solutions",
      description: "Expert technical services and system implementations tailored to your business requirements.",
      features: ["System Integration", "Technical Support", "Maintenance"]
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your business assets and ensure compliance.",
      features: ["Risk Assessment", "Security Audits", "Compliance"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your business efficiency with our performance optimization and consulting services.",
      features: ["Process Improvement", "Workflow Optimization", "Training"]
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic consulting to help your business grow and adapt to market changes.",
      features: ["Strategy Planning", "Market Analysis", "Implementation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-business-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-business-dark">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive business services designed to help your company thrive in today's competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-business-light/50 hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-business-dark group-hover:text-business-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-business-dark font-medium">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-business-blue to-business-accent text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;