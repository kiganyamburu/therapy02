import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-therapy-teal-light via-background to-therapy-sage-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge
              variant="secondary"
              className="bg-therapy-warm-light text-therapy-navy"
            >
              Coming Soon
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for questions, appointments, or
              support.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto text-center p-8">
            <CardHeader>
              <CardTitle>Full Contact Page Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We're building a comprehensive contact page with location
                details, contact forms, and interactive maps.
              </p>
              <div className="space-y-2 text-center">
                <p className="font-medium">For immediate assistance:</p>
                <p className="text-primary font-semibold">(555) 123-4567</p>
                <p className="text-muted-foreground">info@mindbridge.com</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
