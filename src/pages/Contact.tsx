import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/forms/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-business-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-business-blue text-white px-6 py-2 mb-6">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-business-dark mb-6">
            Get In Touch
            <span className="block text-transparent bg-gradient-to-r from-business-blue to-business-accent bg-clip-text">
              Let's Start Your Project
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation 
            and discover how our professional services can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-xl w-fit">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-dark mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-2">
                  Speak directly with our team
                </p>
                <p className="text-business-blue font-semibold">
                  (555) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-xl w-fit">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-dark mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-2">
                  Send us your questions
                </p>
                <p className="text-business-blue font-semibold">
                  info@servicepro.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-xl w-fit">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-dark mb-2">
                  Live Chat
                </h3>
                <p className="text-muted-foreground mb-2">
                  Chat with us online
                </p>
                <p className="text-business-blue font-semibold">
                  Available 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-white to-business-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-business-dark">
                    Our Location
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-business-dark">ServicePro Headquarters</p>
                    <p className="text-muted-foreground">
                      123 Business Street<br />
                      Suite 100<br />
                      Business City, State 12345
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      We're located in the heart of the business district with easy access 
                      to major highways and public transportation. Free parking available 
                      for all client meetings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-business-blue to-business-accent rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-business-dark">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" }
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-business-dark">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-business-light rounded-lg">
                  <p className="text-sm text-business-dark">
                    <strong>Emergency Services:</strong> Available 24/7 for urgent business continuity needs. 
                    Call our emergency hotline for immediate assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;