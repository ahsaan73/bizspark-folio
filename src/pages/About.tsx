import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our clients' success and satisfaction above everything else."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional quality in every project and service we provide."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaboration and partnership drive our success and innovation."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering measurable outcomes that impact your business."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Satisfied Clients" },
    { number: "10+", label: "Years of Experience" },
    { number: "25+", label: "Expert Team Members" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-business-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-business-blue text-white px-6 py-2">About ServicePro</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-business-dark">
              Building Trust Through
              <span className="block text-transparent bg-gradient-to-r from-business-blue to-business-accent bg-clip-text">
                Professional Excellence
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For over a decade, ServicePro has been the trusted partner for businesses seeking 
              reliable, professional services. We combine industry expertise with innovative 
              solutions to help our clients achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-business-blue to-business-accent bg-clip-text">
                  {stat.number}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-white to-business-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-business-dark">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014, ServicePro began with a simple mission: to provide businesses 
                  with reliable, professional services that drive real results. What started as 
                  a small team of dedicated professionals has grown into a comprehensive service 
                  provider trusted by hundreds of companies.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and an 
                  unwavering commitment to our clients' success. We've evolved our services 
                  to meet the changing needs of modern businesses while maintaining the 
                  personal touch that sets us apart.
                </p>
                <p>
                  Today, we're proud to be recognized as industry leaders, but we never forget 
                  our roots or the values that got us here: integrity, excellence, and a 
                  genuine desire to help our clients thrive.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-business-dark">Why Choose ServicePro?</h3>
              <div className="space-y-4">
                {[
                  "Proven track record of success",
                  "Licensed and fully insured",
                  "24/7 customer support",
                  "Competitive pricing",
                  "Satisfaction guarantee",
                  "Expert team of professionals"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-business-blue" />
                    <span className="text-business-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-business-dark">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver the best possible service to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-xl w-fit">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-business-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;