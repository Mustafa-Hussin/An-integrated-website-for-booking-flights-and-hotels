import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader } from '../ui/card';

interface ReviewCardProps {
  userName: string;
  userImage?: string;
  rating: number;
  comment: string;
  date: string;
}

export function ReviewCard({ userName, userImage, rating, comment, date }: ReviewCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={userImage} alt={userName} />
          <AvatarFallback>{userName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-semibold">{userName}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{comment}</p>
      </CardContent>
    </Card>
  );
}
