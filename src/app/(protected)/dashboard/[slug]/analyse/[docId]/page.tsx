import { getUserDocWithComments } from "@/actions/user/queries";
import { notFound } from "next/navigation";
// <-- NEW
import AnalyzeCharts from "@/components/global/documents-single-page/analyze-charts";
import CommentsList from "@/components/global/documents-single-page/comments-list";

export default async function AnalysePage({
  params,
}: {
  params: { docId: string };
}) {
  const doc = await getUserDocWithComments(params.docId);
  if (!doc) return notFound();

  // for ChartJS
  const sentimentCounts = {
    positive: 0,
    negative: 0,
    neutral: 0,
  };

  doc.comments.forEach((c) => {
    sentimentCounts[c.result] += 1;
  });

  const chartData = {
    labels: ["مثبت", "منفی", "خنثی"],
    datasets: [
      {
        label: "تعداد نظرات",
        data: [
          sentimentCounts.positive,
          sentimentCounts.negative,
          sentimentCounts.neutral,
        ],
        backgroundColor: ["#10b981", "#ef4444", "#facc15"],
        borderColor: ["#064e3b", "#7f1d1d", "#78350f"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 text-white flex-col space-y-10">
      <div>
        <h2 className="text-2xl mb-4">نام فایل آنالیز شده: {doc.filePath}</h2>
        {/* pie & bar chartJS */}
        <AnalyzeCharts chartData={chartData} />
      </div>
      <div>
        <CommentsList comments={doc.comments} />
      </div>
    </div>
  );
}
