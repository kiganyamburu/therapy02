import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  Send,
  Video,
  Users,
  Shield,
  Heart,
  Headphones,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      title: "Phone",
      description: "Call us directly for immediate assistance",
      icon: <Phone className="w-6 h-6" />,
      primary: "(555) 123-4567",
      secondary: "Crisis Line: (555) 911-HELP",
      available: "24/7 Crisis Support",
      action: "Call Now",
      color: "therapy-teal"
    },
    {
      title: "Email",
      description: "Send us a message for non-urgent inquiries",
      icon: <Mail className="w-6 h-6" />,
      primary: "info@mindbridge-therapy.com",
      secondary: "appointments@mindbridge-therapy.com",
      available: "Response within 24 hours",
      action: "Send Email",
      color: "therapy-sage"
    },
    {
      title: "Online Booking",
      description: "Schedule appointments through our secure portal",
      icon: <Calendar className="w-6 h-6" />,
      primary: "Book Online 24/7",
      secondary: "Secure patient portal",
      available: "Immediate confirmation",
      action: "Book Now",
      color: "therapy-warm"
    },
    {
      title: "Crisis Support",
      description: "Immediate help for mental health emergencies",
      icon: <AlertTriangle className="w-6 h-6" />,
      primary: "Crisis Line: (555) 911-HELP",
      secondary: "National Suicide Prevention: 988",
      available: "24/7 Emergency Support",
      action: "Get Help",
      color: "therapy-navy"
    }
  ];

  const officeHours = [
    { day: "Monday", hours: "8:00 AM - 7:00 PM", available: true },
    { day: "Tuesday", hours: "8:00 AM - 7:00 PM", available: true },
    { day: "Wednesday", hours: "8:00 AM - 7:00 PM", available: true },
    { day: "Thursday", hours: "8:00 AM - 7:00 PM", available: true },
    { day: "Friday", hours: "8:00 AM - 7:00 PM", available: true },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Sunday", hours: "Emergency Only", available: false }
  ];

  const faqs = [
    {
      question: "How do I schedule my first appointment?",
      answer: "You can schedule by calling (555) 123-4567, using our online booking system, or sending us an email. We'll work with you to find a convenient time."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please call us to verify your specific coverage and benefits."
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on understanding your needs, discussing your goals, and creating a personalized treatment plan together."
    },
    {
      question: "Do you offer telehealth sessions?",
      answer: "Yes, we offer secure video sessions through our HIPAA-compliant platform for your convenience and safety."
    },
    {
      question: "What if I need help outside office hours?",
      answer: "We provide 24/7 crisis support through our crisis line. For non-emergency questions, you can email us and we'll respond within 24 hours."
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help. Reach out to us for appointments, questions, or support. Your mental health journey starts with a simple conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`mx-auto w-12 h-12 bg-${method.color}/10 rounded-full flex items-center justify-center mb-4`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="font-medium text-sm">{method.primary}</p>
                    <p className="text-xs text-muted-foreground">{method.secondary}</p>
                    <Badge variant="outline" className="text-xs">
                      {method.available}
                    </Badge>
                  </div>
                  <Button className="w-full" variant={index === 3 ? "destructive" : "default"}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="contact-form" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
              <TabsTrigger value="office-info">Office Info</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Contact Form Tab */}
            <TabsContent value="contact-form" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Your first name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="appointment">Schedule Appointment</SelectItem>
                            <SelectItem value="insurance">Insurance Questions</SelectItem>
                            <SelectItem value="services">Services Information</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us how we can help you..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="privacy" className="rounded" />
                        <Label htmlFor="privacy" className="text-sm">
                          I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to being contacted.
                        </Label>
                      </div>
                      
                      <Button className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="w-5 h-5" />
                        <span>Your Privacy Matters</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        All communications are confidential and secure. We follow strict HIPAA guidelines to protect your privacy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>Response Time</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        We typically respond to non-urgent inquiries within 24 hours during business days. For urgent matters, please call us directly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Video className="w-5 h-5" />
                        <span>Telehealth Available</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        We offer secure video sessions through our HIPAA-compliant platform. Ask about telehealth options when booking.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Office Info Tab */}
            <TabsContent value="office-info" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Office Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-therapy-teal/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-therapy-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Address</h3>
                          <p className="text-muted-foreground">
                            MindBridge Therapy Center<br />
                            123 Wellness Avenue<br />
                            Suite 200<br />
                            Mental Health City, MH 12345
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-therapy-sage/10 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-therapy-sage" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Phone Numbers</h3>
                          <p className="text-muted-foreground">
                            Main: (555) 123-4567<br />
                            Crisis Line: (555) 911-HELP<br />
                            Fax: (555) 123-4568
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-therapy-warm/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-therapy-warm" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            General: info@mindbridge-therapy.com<br />
                            Appointments: appointments@mindbridge-therapy.com<br />
                            Billing: billing@mindbridge-therapy.com
                          </p>
                        </div>
                      </div>

                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {officeHours.map((day, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${day.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="font-medium">{day.day}</span>
                          </div>
                          <span className={`text-sm ${day.available ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {day.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-therapy-teal/10 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-therapy-teal" />
                        <span className="font-semibold">Emergency Support</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Crisis support is available 24/7. Call our crisis line or contact emergency services if you're in immediate danger.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">
                    Common questions about our services, appointments, and policies.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <MessageCircle className="w-5 h-5 text-therapy-teal" />
                          <span>{faq.question}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">Still Have Questions?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Can't find what you're looking for? We're here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Us
                      </Button>
                      <Button variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-therapy-teal to-therapy-sage text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait to prioritize your mental health. Contact us today to schedule your consultation and begin your journey to wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-therapy-navy hover:bg-white/90">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
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
