import Resume from "@/components/sections/Resume";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata = {
  title: "Resume — Sisay Abebayew",
  description: "Resume and professional profile of Sisay Abebayew.",
};

export default function ResumePage() {
  return (
    <>
      <Resume />
      <MobileBottomNav />
    </>
  );
}