export interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviewsCount?: number;
  instructor: {
    name: string;
    avatar?: string;
  };
  price: number;
  priceSuffix?: string;
  originalPrice?: number;
  thumbnail: string;
  tag?: string;
  lessonsCount?: number;
  duration?: string;
  commentsCount?: number;
  level?: string;
  enrolledStudentsCount?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating?: number;
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

