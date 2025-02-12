import { onGetPaymentConnected } from "@/actions/settings";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Props = {
    name: string; // Ajoute d'autres intégrations si besoin
};

const IntegrationStatus = async ({ name }: Props) => {
    const payment = await onGetPaymentConnected();

    const connections: Record<string, boolean> = {
        stripe: !!payment, // Utilisation de `!!` pour s'assurer d'un booléen
    };

    return (
        <Badge
            className={cn(
                "flex items-center gap-1",
                connections[name]
                    ? "bg-gradient-to-br from-blue-500 to-purple-500"
                    : "bg-gray-700"
            )}
        >
            {connections[name] && <Check className="h-3 w-3" />}
            {connections[name] ? "connected" : "disconnected"}
        </Badge>
    );
};

export default IntegrationStatus;
