import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function About() {
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
              About MindBridge Therapy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our mission, values, and commitment to mental health
              care.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto text-center p-8">
            <CardHeader>
              <CardTitle>Our Story Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We're crafting a detailed about page that will share our
                mission, values, and the passionate team behind MindBridge
                Therapy.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Calendar className="mr-2 h-4 w-4" />
                Meet Our Team Instead
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
