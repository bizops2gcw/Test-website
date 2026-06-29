import {
  Compass,
  LineChart,
  ShieldCheck,
  Users,
  Settings,
  TrendingUp,
  Handshake,
  Network,
  Target,
  ClipboardCheck,
  Gauge,
  Workflow,
  PiggyBank,
  Scale,
  Briefcase,
  Building2,
  FileSearch,
  Rocket,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Compass,
  LineChart,
  ShieldCheck,
  Users,
  Settings,
  TrendingUp,
  Handshake,
  Network,
  Target,
  ClipboardCheck,
  Gauge,
  Workflow,
  PiggyBank,
  Scale,
  Briefcase,
  Building2,
  FileSearch,
  Rocket,
  CheckCircle2,
};

export default function Icon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const Cmp = (name && MAP[name]) || CheckCircle2;
  return <Cmp className={className} aria-hidden="true" />;
}
