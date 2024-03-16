import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import styled from 'styled-components';

const DownloadButton = styled.button`
  background-color: #007bff;
  color: #fff;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  margin: 5px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MyDocument = () => (
  <Document>
    <Page>
      <Text>Conteúdo do PDF aqui</Text>
    </Page>
  </Document>
);

const PdfDownloadButton = () => {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="dashboard.pdf">
      {({ blob, url, loading, error }) => (
        <DownloadButton>
          {loading ? 'Carregando...' : 'Baixar PDF'}
        </DownloadButton>
      )}
    </PDFDownloadLink>
  );
}

export default PdfDownloadButton;
