import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Welcome to Flowverse</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Create, manage and visualize your workflows with ease.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/flows">View Flows</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/create">Create New Flow</Link>
            </Button>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Visual Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Drag and drop interface for creating complex workflows without writing code.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link to="/features">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flow Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track performance and identify bottlenecks in your workflows with detailed analytics.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link to="/features">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Work together with your team members in real-time on shared workflows.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild>
                <Link to="/features">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}