
import toast from "react-hot-toast";

const ExportCSV = ({
  transactions,
}) => {

  const exportCSV = () => {

    if (
      !transactions ||
      transactions.length === 0
    ) {

     toast.error(
  "No transactions available to export"
);

return;
    }

    const headers =
      "Title,Amount,Category,Type,Date\n";

    const rows =
      transactions
        .map(
          (item) =>

            `"${item.title}","${item.amount}","${item.category}","${item.type}","${item.date}"`
        )
        .join("\n");

    const csvContent =
      headers + rows;

    const blob =
      new Blob(
        [csvContent],
        {
          type:
            "text/csv;charset=utf-8;",
        }
      );

    const link =
      document.createElement(
        "a"
      );

    link.href =
      URL.createObjectURL(
        blob
      );

    link.download =
      "ExpenseFlow_Report.csv";

    link.click();
  };

  return (

   <button
  className="settings-btn"
  onClick={exportCSV}
>
  Export CSV
</button>

  );
};

export default ExportCSV;