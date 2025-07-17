import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Heart, 
  Brain, 
  Shield, 
  Phone, 
  Search,
  Clock,
  User,
  FileText,
  Video,
  Headphones,
  AlertTriangle,
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Sparkles
} from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Articles & Guides",
      icon: <BookOpen className="w-6 h-6" />,
      description: "In-depth articles on mental health topics",
      count: 45,
      color: "therapy-teal"
    },
    {
      title: "Worksheets & Tools",
      icon: <FileText className="w-6 h-6" />,
      description: "Downloadable resources for self-reflection",
      count: 28,
      color: "therapy-sage"
    },
    {
      title: "Audio & Video",
      icon: <Video className="w-6 h-6" />,
      description: "Guided meditations and educational content",
      count: 32,
      color: "therapy-warm"
    },
    {
      title: "Crisis Support",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Emergency resources and hotlines",
      count: 12,
      color: "therapy-navy"
    }
  ];

  const featuredArticles = [
    {
      title: "Understanding Anxiety: A Complete Guide",
      excerpt: "Learn about the different types of anxiety disorders and evidence-based treatment approaches.",
      category: "Anxiety",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      date: "June 15, 2025",
      featured: true
    },
    {
      title: "Building Resilience in Difficult Times",
      excerpt: "Practical strategies for developing emotional resilience and coping with life's challenges.",
      category: "Mental Wellness",
      readTime: "6 min read",
      author: "Dr. Michael Chen",
      date: "June 10, 2025",
      featured: true
    },
    {
      title: "The Science of Sleep and Mental Health",
      excerpt: "Discover how sleep affects your mental health and tips for better sleep hygiene.",
      category: "Sleep & Health",
      readTime: "10 min read",
      author: "Dr. Emily Rodriguez",
      date: "June 8, 2025",
      featured: false
    },
    {
      title: "Mindfulness for Beginners",
      excerpt: "A step-by-step guide to starting your mindfulness practice and reducing stress.",
      category: "Mindfulness",
      readTime: "5 min read",
      author: "Dr. James Wilson",
      date: "June 5, 2025",
      featured: false
    }
  ];

  const worksheets = [
    {
      title: "Daily Mood Tracker",
      description: "Track your mood patterns and identify triggers",
      type: "PDF Download",
      category: "Mood Management",
      downloads: 1250
    },
    {
      title: "Anxiety Coping Strategies Worksheet",
      description: "Practical techniques for managing anxiety symptoms",
      type: "PDF Download",
      category: "Anxiety",
      downloads: 980
    },
    {
      title: "Gratitude Journal Template",
      description: "Cultivate gratitude with this structured journal format",
      type: "PDF Download",
      category: "Positive Psychology",
      downloads: 750
    },
    {
      title: "Stress Management Planner",
      description: "Organize your stress management strategies and goals",
      type: "PDF Download",
      category: "Stress Management",
      downloads: 630
    }
  ];

  const audioResources = [
    {
      title: "5-Minute Breathing Meditation",
      description: "Quick breathing exercise for instant calm",
      duration: "5:32",
      type: "Audio",
      category: "Meditation",
      plays: 2100
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Full-body relaxation technique for stress relief",
      duration: "15:45",
      type: "Audio",
      category: "Relaxation",
      plays: 1800
    },
    {
      title: "Understanding Depression",
      description: "Educational video about depression symptoms and treatment",
      duration: "12:30",
      type: "Video",
      category: "Education",
      plays: 1500
    },
    {
      title: "Sleep Stories for Adults",
      description: "Calming bedtime stories to help you fall asleep",
      duration: "20:15",
      type: "Audio",
      category: "Sleep",
      plays: 1200
    }
  ];

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support for suicidal thoughts",
      type: "Emergency"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "Free, 24/7 support via text message",
      type: "Crisis Support"
    },
    {
      name: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      description: "Support for domestic violence situations",
      type: "Emergency"
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "Mental health and substance abuse support",
      type: "Support"
    }
  ];

  const selfCareTools = [
    {
      title: "Mood Check-in",
      description: "Quick daily assessment of your emotional state",
      action: "Start Assessment",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Breathing Exercise",
      description: "Guided breathing techniques for immediate calm",
      action: "Begin Exercise",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Stress Level Tracker",
      description: "Monitor your stress levels throughout the day",
      action: "Track Now",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Gratitude Practice",
      description: "Daily gratitude exercises for positive mindset",
      action: "Practice Now",
      icon: <Star className="w-5 h-5" />
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
              Mental Health Resources
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Resource Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mental health resources, educational materials, and self-help tools to support your wellness journey.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`mx-auto w-12 h-12 bg-${category.color}/10 rounded-full flex items-center justify-center mb-4`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4">
                    {category.count} resources
                  </Badge>
                  <Button className="w-full" variant="outline">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
              <TabsTrigger value="audio">Audio/Video</TabsTrigger>
              <TabsTrigger value="crisis">Crisis Support</TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <Card key={index} className={`${article.featured ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                    {article.featured && (
                      <Badge className="absolute -top-2 left-6 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Worksheets Tab */}
            <TabsContent value="worksheets" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {worksheets.map((worksheet, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{worksheet.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Download className="w-4 h-4 mr-1" />
                          {worksheet.downloads} downloads
                        </div>
                      </div>
                      <CardTitle className="text-lg">{worksheet.title}</CardTitle>
                      <p className="text-muted-foreground">{worksheet.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{worksheet.type}</span>
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Audio/Video Tab */}
            <TabsContent value="audio" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {audioResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{resource.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          {resource.type === 'Audio' ? <Headphones className="w-4 h-4 mr-1" /> : <Video className="w-4 h-4 mr-1" />}
                          {resource.duration}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          {resource.plays} plays
                        </div>
                        <Button>
                          Play
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Crisis Support Tab */}
            <TabsContent value="crisis" className="mt-8">
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <CardTitle className="text-red-800">Crisis Support</CardTitle>
                    </div>
                    <p className="text-red-700">
                      If you're experiencing a mental health crisis, please reach out for immediate help. You're not alone.
                    </p>
                  </CardHeader>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {crisisResources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={resource.type === 'Emergency' ? 'destructive' : 'secondary'}>
                            {resource.type}
                          </Badge>
                          <Phone className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <p className="text-muted-foreground">{resource.description}</p>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full" variant={resource.type === 'Emergency' ? 'destructive' : 'default'}>
                          <Phone className="w-4 h-4 mr-2" />
                          {resource.phone}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Self-Care Tools */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Self-Care Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick tools and exercises to support your mental health throughout the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfCareTools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {tool.icon}
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    {tool.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-therapy-teal to-therapy-sage text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Support?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            While these resources are helpful, sometimes you need personalized support. Our therapists are here to help.
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
