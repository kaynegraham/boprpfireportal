import { Banner } from "@/components/Banner";
import { ComingSoon } from "@/components/ComingSoon";

export default function RosterPage() {
  return (
    <>
      <Banner
        title="Roster"
        subtitle="Shift rosters and personnel assignments across the district."
      />
      <div className="px-6 py-8 sm:px-10">
        <ComingSoon
          title="Roster"
          description="Coming soon. This page requires login, and will show live shift rosters and station assignments once Discord OAuth and member accounts are wired up in stage 2."
        />
      </div>
    </>
  );
}
