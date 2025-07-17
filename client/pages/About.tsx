import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Shield, 
  Brain, 
  Award, 
  Calendar, 
  Phone,
  MapPin,
  Mail,
  Clock,
  Star,
  CheckCircle,
  Target,
  Lightbulb,
  Compass,
  BookOpen,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Compassionate Care",
      description: "We provide empathetic, non-judgmental support for every client's unique journey",
      icon: <Heart className="w-8 h-8 text-therapy-teal" />
    },
    {
      title: "Evidence-Based Practice",
      description: "Our treatments are grounded in scientific research and proven methodologies",
      icon: <Brain className="w-8 h-8 text-therapy-sage" />
    },
    {
      title: "Client-Centered Approach",
      description: "Every treatment plan is tailored to your specific needs, goals, and preferences",
      icon: <Target className="w-8 h-8 text-therapy-warm" />
    },
    {
      title: "Safe & Confidential",
      description: "We maintain the highest standards of privacy and create safe therapeutic spaces",
      icon: <Shield className="w-8 h-8 text-therapy-navy" />
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Director & Licensed Psychologist",
      credentials: "PhD, PsyD, Licensed Clinical Psychologist",
      specialties: ["Anxiety Disorders", "Depression", "Trauma Recovery"],
      experience: "15+ years",
      image: "/placeholder.svg",
      bio: "Dr. Johnson founded MindBridge Therapy with a vision to make quality mental health care accessible to everyone. She specializes in cognitive-behavioral therapy and has extensive experience in treating anxiety and mood disorders."
    },
    {
      name: "Michael Rodriguez",
      role: "Licensed Marriage & Family Therapist",
      credentials: "LMFT, MA in Marriage & Family Therapy",
      specialties: ["Couples Therapy", "Family Dynamics", "Communication"],
      experience: "10+ years",
      image: "/placeholder.svg",
      bio: "Michael brings a wealth of experience in relationship therapy and family counseling. He uses evidence-based approaches to help couples and families build stronger, healthier relationships."
    },
    {
      name: "Dr. Emily Chen",
      role: "Senior Therapist & Trauma Specialist",
      credentials: "PhD in Clinical Psychology, EMDR Certified",
      specialties: ["PTSD", "Trauma Recovery", "EMDR Therapy"],
      experience: "12+ years",
      image: "/placeholder.svg",
      bio: "Dr. Chen is a trauma specialist who uses cutting-edge techniques like EMDR to help clients process and heal from traumatic experiences. She's passionate about helping survivors reclaim their lives."
    },
    {
      name: "James Wilson",
      role: "Licensed Clinical Social Worker",
      credentials: "LCSW, MSW",
      specialties: ["Adolescent Therapy", "Addiction Recovery", "Life Transitions"],
      experience: "8+ years",
      image: "/placeholder.svg",
      bio: "James specializes in working with adolescents and young adults, helping them navigate life transitions and overcome challenges. His approach combines empathy with practical strategies for positive change."
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Clients Served",
      description: "Successfully supported over 500 individuals and families"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction ratings from our clients"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Combined decades of experience in mental health care"
    },
    {
      number: "24/7",
      label: "Crisis Support",
      description: "Emergency support available when you need it most"
    }
  ];

  const approach = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation to understand your unique needs and goals",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "Personalized Plan",
      description: "Collaborative development of a treatment plan tailored to you",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Evidence-Based Treatment",
      description: "Implementation of proven therapeutic techniques and strategies",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Ongoing Support",
      description: "Regular check-ins and adjustments to ensure continued progress",
      icon: <Users className="w-6 h-6" />
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
              About MindBridge Therapy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Bridging the Gap to Mental Wellness
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded on the belief that everyone deserves access to quality mental health care, MindBridge Therapy has been serving our community with compassionate, evidence-based treatment since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At MindBridge Therapy, we believe that mental health is fundamental to overall well-being. Our mission is to provide accessible, compassionate, and effective mental health services that empower individuals and families to overcome challenges and thrive.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that seeking therapy can be a vulnerable step, which is why we've created a safe, welcoming environment where you can explore your thoughts and feelings without judgment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-therapy-teal-light/30">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-therapy-teal rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To create a world where mental health support is accessible, destigmatized, and integrated into everyday wellness practices.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape how we serve our clients and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced, licensed professionals are dedicated to providing you with the highest quality mental health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-32 sm:h-32 w-full h-48 bg-therapy-teal-light/30 flex items-center justify-center">
                    <Users className="w-16 h-16 text-therapy-teal" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-therapy-teal font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.credentials}</p>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Award className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium">Experience: {member.experience}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-therapy-teal to-therapy-sage text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality mental health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-sm opacity-80">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured, collaborative approach to ensure you receive the most effective treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-therapy-teal/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-therapy-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Wellness Avenue<br />
                      Suite 200<br />
                      Mental Health City, MH 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-therapy-sage/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-therapy-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Emergency appointments only
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-therapy-warm/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-therapy-warm" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">
                      Phone: (555) 123-4567<br />
                      Email: info@mindbridge-therapy.com<br />
                      Crisis Line: (555) 911-HELP
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Why Choose MindBridge Therapy?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Licensed, experienced professionals",
                    "Evidence-based treatment approaches",
                    "Flexible scheduling including evenings",
                    "In-person and telehealth options",
                    "Sliding scale fees available",
                    "Crisis support available",
                    "Comfortable, welcoming environment",
                    "Confidential and judgment-free care"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-therapy-navy to-therapy-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards better mental health. Our compassionate team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-therapy-navy hover:bg-white/90">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Consultation
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
