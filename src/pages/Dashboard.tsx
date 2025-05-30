import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Redirect } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Activity, Users, LineChart } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.email || "User"}!</h1>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Activity size={16} />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart size={16} />
            <span>Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="customers" className="flex items-center gap-2">
            <Users size={16} />
            <span>Customers</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <LineChart size={16} />
            <span>Reports</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <CardDescription>Overall user growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">2,456</div>
                <div className="text-sm text-green-500 mt-2">↑ 12% from last month</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Engagement</CardTitle>
                <CardDescription>Daily active users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">1,893</div>
                <div className="text-sm text-green-500 mt-2">↑ 8% from last week</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Monthly recurring revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$32,580</div>
                <div className="text-sm text-green-500 mt-2">↑ 15% from last month</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="font-medium">New user registered</div>
                      <div className="text-sm text-slate-500">{i} hour{i !== 1 ? 's' : ''} ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Detailed metrics and performance data</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-slate-50">
              <div className="text-center p-6">
                <BarChart className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 text-lg font-medium">Analytics Visualization</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Detailed analytics charts and metrics will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>View and manage your customers</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-slate-50">
              <div className="text-center p-6">
                <Users className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 text-lg font-medium">Customer List</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Your customer database and management tools will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports & Exports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-slate-50">
              <div className="text-center p-6">
                <LineChart className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 text-lg font-medium">Report Generation</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Your report templates and export options will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}