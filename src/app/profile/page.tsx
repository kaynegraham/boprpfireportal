import { Banner } from "@/components/Banner";
import { ComingSoon } from "@/components/ComingSoon";

export default function ProfilePage() {
  return (
    <>
      <Banner
        title="Profile"
        subtitle="Your member details, certifications and station assignment."
      />
      <div className="px-6 py-8 sm:px-10">
        <ComingSoon
          title="Profile"
          description="Coming soon — requires login. Sign in with Discord will populate this page with your member profile once stage 2 ships."
        />
      </div>
    </>
  );
}
