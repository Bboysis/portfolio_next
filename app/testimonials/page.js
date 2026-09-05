import Testimonials from "@/components/sections/Testimonials";
import LeaveTestimonial from "@/components/sections/LeaveTestimonial";
import MobileScrollProgress from "@/components/MobileScrollProgress";
export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen">
       <LeaveTestimonial />
      
      <Testimonials />

      <MobileScrollProgress/>
    </main>
  );
}