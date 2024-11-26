import { ReviewCard } from '../reviews/ReviewCard';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { Star } from 'lucide-react';

export function ReviewsSection() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const mockReviews = [
    {
      userName: 'أحمد محمد',
      rating: 5,
      comment: 'رحلة رائعة وخدمة ممتازة! سأكرر التجربة حتماً',
      date: '2024-03-15',
    },
    {
      userName: 'سارة أحمد',
      rating: 4,
      comment: 'تجربة جيدة جداً، التنظيم كان ممتاز',
      date: '2024-03-14',
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">التقييمات</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>إضافة تقييم</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>إضافة تقييم جديد</DialogTitle>
                <DialogDescription>
                  شاركنا تجربتك مع الرحلة
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center gap-1 my-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 cursor-pointer ${
                      i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="اكتب تعليقك هنا..."
                className="min-h-[100px]"
              />
              <Button className="w-full mt-4">إرسال التقييم</Button>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
