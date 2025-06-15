
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  description: string;
}

const ContactCard = ({ icon: IconComponent, title, content, description }: ContactCardProps) => {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <IconComponent className="h-6 w-6 text-kovelor-orange" />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-kovelor-orange font-medium mb-1">{content}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
