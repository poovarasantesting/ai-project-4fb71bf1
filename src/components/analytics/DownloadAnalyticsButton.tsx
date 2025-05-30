import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface DownloadAnalyticsButtonProps {
  data: any;
  filename?: string;
}

export function DownloadAnalyticsButton({ 
  data, 
  filename = "analytics-data.json" 
}: DownloadAnalyticsButtonProps) {
  const { toast } = useToast();

  const handleDownload = () => {
    try {
      // Convert the data to a JSON string
      const jsonString = JSON.stringify(data, null, 2);
      
      // Create a blob from the JSON string
      const blob = new Blob([jsonString], { type: "application/json" });
      
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      
      // Append the link to the body
      document.body.appendChild(link);
      
      // Click the link to trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Download started",
        description: `${filename} is being downloaded.`,
      });
    } catch (error) {
      console.error("Error downloading analytics data:", error);
      toast({
        title: "Download failed",
        description: "There was an error downloading the analytics data.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleDownload}
      className="flex items-center gap-1"
    >
      <Download className="h-4 w-4" />
      <span>Download</span>
    </Button>
  );
}