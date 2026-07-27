import { Banner } from "@/components/Banner";
import { ComingSoon } from "@/components/ComingSoon";

export default function ApplicationsPage() {
  return (
    <>
      <Banner
        title="Applications"
        subtitle="Recruitment and internal transfer applications."
      />
      <div className="px-6 py-8 sm:px-10">
        <ComingSoon
          title="Applications"
          description="Coming soon. This page requires login. Recruitment and transfer applications will be submitted and tracked here once accounts go live in stage 2."
        />
      </div>
    </>
  );
}
