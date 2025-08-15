import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, Shield, Zap, Users, Wrench, Database, 
  Cloud, Phone, ArrowRight, CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Technical Solutions",
      description: "Comprehensive technical services designed to optimize your business operations and systems.",
      features: [
        "System Integration & Setup",
        "Technical Consulting",
        "Software Implementation",
        "Equipment Installation",
        "Process Automation"
      ],
      pricing: "Starting at $2,500"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Advanced security solutions to protect your business assets and ensure regulatory compliance.",
      features: [
        "Security Risk Assessment",
        "Compliance Auditing",
        "Security System Installation",
        "Data Protection Services",
        "Emergency Response Planning"
      ],
      pricing: "Starting at $1,800"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your business efficiency with our comprehensive performance improvement services.",
      features: [
        "Process Analysis & Improvement",
        "Workflow Optimization",
        "Performance Monitoring",
        "Team Training Programs",
        "Quality Assurance"
      ],
      pricing: "Starting at $3,200"
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic business consulting to help your organization grow and adapt to market changes.",
      features: [
        "Strategic Planning",
        "Market Analysis",
        "Business Process Review",
        "Change Management",
        "Implementation Support"
      ],
      pricing: "Starting at $4,000"
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support services to keep your systems running smoothly.",
      features: [
        "Preventive Maintenance",
        "24/7 Support Hotline",
        "Regular System Updates",
        "Performance Monitoring",
        "Emergency Repairs"
      ],
      pricing: "Starting at $800/month"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Professional data management services to organize, secure, and optimize your business data.",
      features: [
        "Data Migration",
        "Database Optimization",
        "Backup Solutions",
        "Data Analytics",
        "Compliance Management"
      ],
      pricing: "Starting at $2,200"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Modern cloud services to enhance collaboration, security, and scalability.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Cloud Security",
        "Backup & Recovery",
        "Performance Optimization"
      ],
      pricing: "Starting at $1,500"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "24/7 emergency response services for urgent business continuity needs.",
      features: [
        "Emergency Response",
        "Crisis Management",
        "Rapid Recovery Services",
        "Business Continuity Planning",
        "On-site Support"
      ],
      pricing: "Call for pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-business-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-business-blue text-white px-6 py-2 mb-6">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-business-dark mb-6">
            Professional Services
            <span className="block text-transparent bg-gradient-to-r from-business-blue to-business-accent bg-clip-text">
              Tailored to Your Needs
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of professional services designed to help your business 
            operate more efficiently, securely, and profitably. Every solution is customized to 
            meet your specific requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-business-light/30 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-business-dark group-hover:text-business-blue transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-business-blue mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-business-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-lg font-semibold text-business-blue mb-3">
                        {service.pricing}
                      </p>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-business-blue to-business-accent text-white"
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-business-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-business-dark">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We start with a comprehensive consultation to understand your needs and objectives."
              },
              {
                step: "02",
                title: "Planning",
                description: "Our team develops a detailed project plan with timelines, milestones, and deliverables."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the plan with precision, keeping you informed throughout the process."
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing support and maintenance to ensure your continued success."
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-business-blue to-business-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-business-dark">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-business-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and see how our professional services 
            can help your business reach its full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-business-blue to-business-accent text-white"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-business-dark"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;