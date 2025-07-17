import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  Heart, 
  Users, 
  Brain, 
  Shield, 
  Sparkles,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Video,
  MapPin,
  DollarSign
} from "lucide-react";

export default function Services() {
  const therapyServices = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs and goals",
      icon: <Heart className="w-8 h-8 text-therapy-teal" />,
      features: [
        "Personalized treatment plans",
        "Flexible scheduling",
        "Evidence-based approaches",
        "Progress tracking"
      ],
      duration: "50 minutes",
      price: "$120 - $180",
      popular: true
    },
    {
      title: "Couples Therapy",
      description: "Strengthen your relationship through guided communication and healing",
      icon: <Users className="w-8 h-8 text-therapy-sage" />,
      features: [
        "Relationship assessment",
        "Communication skills training",
        "Conflict resolution",
        "Intimacy rebuilding"
      ],
      duration: "60 minutes",
      price: "$150 - $220",
      popular: false
    },
    {
      title: "Family Therapy",
      description: "Build stronger family bonds and resolve conflicts together",
      icon: <Shield className="w-8 h-8 text-therapy-warm" />,
      features: [
        "Family dynamics assessment",
        "Multi-generational healing",
        "Parenting support",
        "Crisis intervention"
      ],
      duration: "60 minutes",
      price: "$140 - $200",
      popular: false
    },
    {
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive environment",
      icon: <Brain className="w-8 h-8 text-therapy-navy" />,
      features: [
        "Peer support network",
        "Shared experiences",
        "Cost-effective option",
        "Weekly sessions"
      ],
      duration: "90 minutes",
      price: "$45 - $75",
      popular: false
    }
  ];

  const specializations = [
    {
      name: "Anxiety & Depression",
      description: "Evidence-based treatments for mood disorders and anxiety conditions",
      approaches: ["CBT", "DBT", "Mindfulness"],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: "Trauma & PTSD",
      description: "Specialized care for trauma survivors using proven therapeutic methods",
      approaches: ["EMDR", "Somatic Therapy", "Narrative Therapy"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Relationship Issues",
      description: "Support for couples and families working through relationship challenges",
      approaches: ["Gottman Method", "EFT", "Solution-Focused"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Life Transitions",
      description: "Guidance through major life changes and personal growth",
      approaches: ["Humanistic", "Existential", "Acceptance & Commitment"],
      icon: <ArrowRight className="w-6 h-6" />
    }
  ];

  const sessionOptions = [
    {
      type: "In-Person",
      icon: <MapPin className="w-5 h-5" />,
      description: "Traditional face-to-face sessions in our comfortable office spaces",
      benefits: ["Personal connection", "Private environment", "Non-verbal communication"]
    },
    {
      type: "Telehealth",
      icon: <Video className="w-5 h-5" />,
      description: "Secure video sessions from the comfort of your home",
      benefits: ["Convenience", "No travel required", "Flexible scheduling"]
    },
    {
      type: "Phone Sessions",
      icon: <Phone className="w-5 h-5" />,
      description: "Audio-only sessions for those who prefer voice communication",
      benefits: ["Accessibility", "Comfort", "Easy scheduling"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-therapy-teal-light via-background to-therapy-sage-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="secondary"
              className="bg-therapy-warm-light text-therapy-navy"
            >
              Comprehensive Care
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional therapy services designed to support your mental health journey with evidence-based treatments and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Therapy Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional therapy services, each designed to meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapyServices.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-2 left-6 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{service.price}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Areas of Specialization
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced therapists specialize in various areas to provide targeted, effective treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {spec.icon}
                  </div>
                  <CardTitle className="text-lg">{spec.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{spec.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {spec.approaches.map((approach, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {approach}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Session Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the format that works best for you and your schedule.
            </p>
          </div>

          <Tabs defaultValue="in-person" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="in-person">In-Person</TabsTrigger>
              <TabsTrigger value="telehealth">Telehealth</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>

            {sessionOptions.map((option, index) => (
              <TabsContent key={index} value={option.type.toLowerCase().replace(' ', '-')} className="mt-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {option.icon}
                      </div>
                      <div>
                        <CardTitle>{option.type} Sessions</CardTitle>
                        <p className="text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {option.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-therapy-teal to-therapy-sage text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards better mental health. Schedule your consultation today and discover how we can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-therapy-navy hover:bg-white/90">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
