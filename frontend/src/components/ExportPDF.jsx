import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

const ExportPDF = ({
  transactions,
}) => {

  const downloadPDF = () => {

    const doc =
      new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "Expense Report",
      14,
      20
    );

    const tableColumn = [

      "Title",
      "Amount",
      "Category",
      "Type",
    ];

    const tableRows = [];

    transactions.forEach(
      (transaction) => {

        const rowData = [

          transaction.title,

          `₹ ${transaction.amount}`,

          transaction.category,

          transaction.type,
        ];

        tableRows.push(
          rowData
        );
      }
    );

    autoTable(doc, {

      head: [tableColumn],

      body: tableRows,

      startY: 30,
    });

    doc.save(
      "expense-report.pdf"
    );
  };

  return (

    <button
      onClick={downloadPDF}
      className="export-btn"
    >

      Export PDF

    </button>
  );
};

export default ExportPDF;