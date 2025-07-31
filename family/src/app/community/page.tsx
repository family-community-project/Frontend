import ActionsHeader from "./_components/ActionsHeader";
import FeedItem from "./_components/FeedItem";
import LogList from "./_components/LogList";

export default function Community() {
  return (
    // TODO Remove temp DIV
    <div className="w-full bg-amber-50 flex justify-center">
      <div className="w-[1280px] flex flex-col h-screen gap-8">
        <h1 className="text-title2 font-semibold">커뮤니티</h1>
        <div className="flex w-[840px] flex-col gap-3">
          <ActionsHeader />
          <div className="flex gap-6">
            <div className="flex flex-col  gap-3">
              <FeedItem />
              <FeedItem />
              <FeedItem />
            </div>
            <LogList />
          </div>
        </div>
      </div>
    </div>
  );
}
