import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DownloadAnalyticsButton } from "./DownloadAnalyticsButton";

interface AnalyticsCardProps {
  title: string;
  description?: string;
  data: any;
  children: React.ReactNode;
}

export function AnalyticsCard({
  title,
  description,
  data,
  children,
}: AnalyticsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <DownloadAnalyticsButton data={data} filename={`${title.toLowerCase().replace(/\s+/g, '-')}-data.json`} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}