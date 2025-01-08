import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import jsPDF from 'jspdf';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
});

const TableToPDF = ({ data }) => {
  // Create a new PDF document
  const doc = new jsPDF();

  // Convert data into an array of arrays for easier processing
  const tableData = data.map((item) => Object.values(item));

  // Render the table using react-pdf
  const renderTable = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.table}>
            {/* Header row */}
            <View style={styles.tableRow}>
              {Object.keys(data[0]).map((header) => (
                <Text key={header} style={styles.tableColHeader}>
                  {header}
                </Text>
              ))}
            </View>

            {/* Data rows */}
            {tableData.map((row, index) => (
              <View key={index} style={styles.tableRow}>
                {row.map((cell, cellIndex) => (
                  <Text key={cellIndex} style={styles.tableCol}>
                    {cell}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  // Generate the PDF and open in a new tab
  const generatePDF = () => {
    const pdfBlob = doc.output('blob');
    const pdfURL = URL.createObjectURL(pdfBlob);
    window.open(pdfURL);
  };

  return (
    <div>
      <PDFViewer  width="1000" height="600">
        {renderTable()}
      </PDFViewer>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default TableToPDF;