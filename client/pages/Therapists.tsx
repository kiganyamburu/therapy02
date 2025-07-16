import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import {
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Search,
  Filter,
  GraduationCap,
  Award,
  Clock,
} from "lucide-react";

export default function Therapists() {
  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Licensed Clinical Psychologist",
      specialties: ["Anxiety", "Depression", "Trauma"],
      experience: "12 years",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg",
      bio: "Dr. Johnson specializes in cognitive-behavioral therapy and has extensive experience treating anxiety and mood disorders.",
      education: "PhD in Clinical Psychology, Stanford University",
      availability: "Available this week",
      location: "In-person & Virtual",
    },
    {
      id: 2,
      name: "Michael Rodriguez, LMFT",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Couples Therapy", "Family Therapy", "Communication"],
      experience: "8 years",
      rating: 4.8,
      reviews: 67,
      image: "/placeholder.svg",
      bio: "Michael helps couples and families build stronger relationships through improved communication and understanding.",
      education: "Master's in Marriage & Family Therapy, UCLA",
      availability: "Limited availability",
      location: "In-person & Virtual",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      title: "Licensed Clinical Social Worker",
      specialties: ["PTSD", "Grief", "Addiction Recovery"],
      experience: "15 years",
      rating: 4.9,
      reviews: 134,
      image: "/placeholder.svg",
      bio: "Dr. Chen uses evidence-based approaches to help clients heal from trauma and navigate life transitions.",
      education: "PhD in Clinical Social Work, Columbia University",
      availability: "Available this week",
      location: "Virtual only",
    },
    {
      id: 4,
      name: "David Thompson, LPC",
      title: "Licensed Professional Counselor",
      specialties: ["Adolescent Therapy", "ADHD", "Behavioral Issues"],
      experience: "10 years",
      rating: 4.7,
      reviews: 52,
      image: "/placeholder.svg",
      bio: "David specializes in working with teens and young adults, helping them navigate challenges and build resilience.",
      education: "Master's in Counseling Psychology, NYU",
      availability: "Available next week",
      location: "In-person & Virtual",
    },
    {
      id: 5,
      name: "Dr. Lisa Martinez",
      title: "Clinical Neuropsychologist",
      specialties: ["ADHD", "Learning Disabilities", "Cognitive Assessment"],
      experience: "14 years",
      rating: 4.8,
      reviews: 76,
      image: "/placeholder.svg",
      bio: "Dr. Martinez provides comprehensive neuropsychological evaluations and specialized therapy for cognitive concerns.",
      education: "PhD in Clinical Neuropsychology, Harvard University",
      availability: "Limited availability",
      location: "In-person only",
    },
    {
      id: 6,
      name: "Jennifer Kim, LCSW",
      title: "Licensed Clinical Social Worker",
      specialties: ["Mindfulness", "Stress Management", "Women's Issues"],
      experience: "7 years",
      rating: 4.9,
      reviews: 93,
      image: "/placeholder.svg",
      bio: "Jennifer integrates mindfulness-based approaches to help clients develop coping strategies and emotional regulation.",
      education: "Master's in Clinical Social Work, UC Berkeley",
      availability: "Available this week",
      location: "Virtual only",
    },
  ];

  const specialties = [
    "All Specialties",
    "Anxiety",
    "Depression",
    "Trauma",
    "Couples Therapy",
    "Family Therapy",
    "ADHD",
    "Addiction Recovery",
    "Grief",
    "Mindfulness",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-therapy-teal-light via-background to-therapy-sage-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge
              variant="secondary"
              className="bg-therapy-warm-light text-therapy-navy"
            >
              Our Team
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
              Meet Our Expert Therapists
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of licensed mental health professionals brings
              years of experience and specialized training to support your
              unique journey.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or specialty..."
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem
                        key={specialty}
                        value={specialty.toLowerCase()}
                      >
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <Clock className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="this-week">This week</SelectItem>
                    <SelectItem value="next-week">Next week</SelectItem>
                    <SelectItem value="within-month">Within a month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <Card
                key={therapist.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-therapy-sage-light rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-therapy-teal rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {therapist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {therapist.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {therapist.title}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-therapy-warm text-therapy-warm" />
                          <span className="text-sm font-medium">
                            {therapist.rating}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({therapist.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">
                      SPECIALTIES:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {therapist.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-therapy-teal-light text-therapy-navy"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {therapist.bio}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {therapist.experience} experience
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {therapist.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span
                        className={`text-sm font-medium ${
                          therapist.availability === "Available this week"
                            ? "text-green-600"
                            : therapist.availability === "Limited availability"
                              ? "text-yellow-600"
                              : "text-orange-600"
                        }`}
                      >
                        {therapist.availability}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-therapy-sage-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Can't Find the Right Match?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our care coordinators can help match you with the perfect
              therapist based on your specific needs and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Personalized Matching
              </Button>
              <Button variant="outline" size="lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
