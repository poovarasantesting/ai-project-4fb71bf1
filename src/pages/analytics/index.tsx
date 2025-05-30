import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/PageHeader";
import { AnalyticsCard } from "@/components/analytics/AnalyticsCard";
import { BarChart, LineChart } from "@/components/charts";

export default function AnalyticsPage() {
  // Sample data - in a real app, this would come from an API or state
  const pageViewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Page Views",
        data: [1200, 1900, 3000, 5000, 4000, 6500],
      },
    ],
  };

  const conversionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Conversion Rate (%)",
        data: [3.2, 2.8, 5.7, 7.0, 6.3, 9.1],
      },
    ],
  };

  const userActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [340, 390, 410, 490, 380, 320, 290],
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <PageHeader 
        heading="Analytics Dashboard" 
        text="Track your site performance and user engagement metrics."
      />
      
      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <AnalyticsCard 
            title="Page Views" 
            description="Total page views over time" 
            data={pageViewData}
          >
            <LineChart 
              data={pageViewData} 
              height={300} 
            />
          </AnalyticsCard>
          
          <AnalyticsCard 
            title="Conversion Rates" 
            description="User conversion percentages" 
            data={conversionData}
          >
            <LineChart 
              data={conversionData} 
              height={300} 
            />
          </AnalyticsCard>
        </TabsContent>
        
        <TabsContent value="engagement" className="space-y-6">
          <AnalyticsCard 
            title="User Activity" 
            description="Daily active users by weekday" 
            data={userActivityData}
          >
            <BarChart 
              data={userActivityData} 
              height={300} 
            />
          </AnalyticsCard>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-6">
          <AnalyticsCard 
            title="Site Performance" 
            description="Loading times and optimization metrics" 
            data={{
              loadTimes: {
                homepage: "0.8s",
                dashboard: "1.2s",
                analytics: "1.5s"
              },
              serverResponse: "230ms",
              cacheHitRate: "87%"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-lg">Avg. Load Time</h3>
                <p className="text-3xl font-bold mt-2">1.2s</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-lg">Server Response</h3>
                <p className="text-3xl font-bold mt-2">230ms</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-lg">Cache Hit Rate</h3>
                <p className="text-3xl font-bold mt-2">87%</p>
              </div>
            </div>
          </AnalyticsCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}