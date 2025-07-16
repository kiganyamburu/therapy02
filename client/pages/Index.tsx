import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Calendar,
  MessageCircle,
  Shield,
  Heart,
  Users,
  Brain,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

export default function Index() {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your personal journey and healing goals.",
      icon: Heart,
      features: [
        "Anxiety & Depression",
        "Trauma Recovery",
        "Personal Growth",
        "Life Transitions",
      ],
    },
    {
      title: "Couples Therapy",
      description:
        "Strengthen relationships through guided communication and understanding.",
      icon: Users,
      features: [
        "Communication Skills",
        "Conflict Resolution",
        "Relationship Building",
        "Trust Issues",
      ],
    },
    {
      title: "Group Therapy",
      description:
        "Connect with others facing similar challenges in a supportive environment.",
      icon: MessageCircle,
      features: [
        "Support Groups",
        "Skill Building",
        "Peer Connection",
        "Shared Healing",
      ],
    },
    {
      title: "Specialized Programs",
      description:
        "Evidence-based treatments for specific mental health conditions.",
      icon: Brain,
      features: [
        "PTSD Treatment",
        "Addiction Recovery",
        "Eating Disorders",
        "Mindfulness Training",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The therapists here truly understand. I've made more progress in 6 months than I had in years. Their approach is compassionate and effective.",
      rating: 5,
    },
    {
      name: "Michael R.",
      text: "Professional, caring, and accessible. The online booking system made it so easy to start my journey. Highly recommend.",
      rating: 5,
    },
    {
      name: "Emma L.",
      text: "Finding the right therapist changed my life. The team here matched me perfectly and I finally feel heard and supported.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Helped" },
    { number: "10+", label: "Expert Therapists" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5 Years", label: "Serving Community" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-therapy-teal-light via-background to-therapy-sage-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-therapy-warm-light text-therapy-navy"
                >
                  Professional Mental Health Support
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Find Your Path to
                  <span className="text-primary block">Mental Wellness</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Professional, compassionate therapy services designed to help
                  you navigate life's challenges and discover your inner
                  strength. Start your healing journey today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Same-day Appointments
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Secure Messaging
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-xl border">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-semibold text-card-foreground">
                      Quick Online Booking
                    </h3>
                    <p className="text-muted-foreground">
                      Schedule your first session in under 2 minutes
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-therapy-sage-light rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        Choose your preferred therapist
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-therapy-sage-light rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        Select convenient time slot
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-therapy-sage-light rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        Secure video or in-person session
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Booking Process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-therapy-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-therapy-warm">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-therapy-warm-light text-therapy-navy"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Comprehensive Mental Health Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a full range of evidence-based therapeutic services, each
              tailored to meet you where you are in your healing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-therapy-teal-light flex items-center justify-center group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Specializations:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-3 w-3 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-therapy-sage-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-therapy-warm-light text-therapy-navy"
            >
              Client Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Trusted by Our Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who found healing and growth through
              our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-therapy-warm text-therapy-warm"
                      />
                    ))}
                  </div>
                  <p className="text-card-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm font-medium text-primary">
                    - {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl opacity-90">
              Take the first step towards better mental health. Our
              compassionate team is here to support you every step of the way.
              Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get More Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-therapy-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary-foreground"></div>
                </div>
                <span className="text-xl font-semibold">
                  MindBridge Therapy
                </span>
              </div>
              <p className="text-sm opacity-80">
                Professional mental health services with a personal touch. Your
                journey to wellness starts here.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>About Us</div>
                <div>Our Therapists</div>
                <div>Services</div>
                <div>Resources</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>(555) 123-4567</div>
                <div>info@mindbridge.com</div>
                <div>
                  123 Healing Way
                  <br />
                  Wellness City, WC 12345
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Hours</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>Mon-Fri: 8:00 AM - 8:00 PM</div>
                <div>Saturday: 9:00 AM - 5:00 PM</div>
                <div>Sunday: Closed</div>
                <div className="text-therapy-warm">Emergency: 24/7</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>
              &copy; 2024 MindBridge Therapy. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
