import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Corporate Office Renovation",
      description: "Complete transformation of a 50,000 sq ft corporate headquarters including modern infrastructure, security systems, and workspace optimization.",
      image: project1,
      category: "Commercial",
      client: "TechCorp Industries",
      duration: "6 months",
      value: "$2.5M"
    },
    {
      id: 2,
      title: "Strategic Business Consulting",
      description: "Comprehensive business process optimization and digital transformation for a multinational corporation, resulting in 40% efficiency improvement.",
      image: project2,
      category: "Consulting",
      client: "Global Solutions Inc.",
      duration: "12 months",
      value: "$1.8M"
    },
    {
      id: 3,
      title: "Enterprise System Integration",
      description: "Full-scale integration of legacy systems with modern cloud infrastructure, including data migration and security implementation.",
      image: project3,
      category: "Technology",
      client: "Manufacturing Plus",
      duration: "8 months",
      value: "$3.2M"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-business-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-business-dark">
            Recent Project Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent successful projects and see how we've helped 
            businesses transform and achieve their objectives.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-business-light/50">
            <div className="grid lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-business-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentProject.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-business-dark mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-semibold text-business-dark">{currentProject.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="font-semibold text-business-dark">{currentProject.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project Value</p>
                      <p className="font-semibold text-business-blue">{currentProject.value}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="font-semibold text-business-dark">{currentProject.category}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-gradient-to-r from-business-blue to-business-accent text-white">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-business-blue text-business-blue hover:bg-business-blue hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-business-blue text-business-blue hover:bg-business-blue hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-business-blue scale-125"
                  : "bg-muted hover:bg-business-blue/50"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex
                  ? "ring-2 ring-business-blue shadow-lg"
                  : "hover:scale-105"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-24 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm text-business-dark truncate">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;