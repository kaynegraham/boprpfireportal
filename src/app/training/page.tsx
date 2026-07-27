import { Banner } from "@/components/Banner";
import { ComingSoon } from "@/components/ComingSoon";

export default function TrainingPage() {
  return (
    <>
      <Banner
        title="Training"
        subtitle="Course records, competency sign-offs and upcoming training sessions."
      />
      <div className="px-6 py-8 sm:px-10">
        <ComingSoon
          title="Training"
          description="Coming soon. This page requires login. Training history and competency records will appear here once member accounts are backed by real data in stage 2."
        />
      </div>
    </>
  );
}
