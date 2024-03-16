import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import EventList from '../components/EventList';
import GraficoVisitantes from '../components/GraficoVisitantes';
import GraficoGenero from '../components/GraficoGenero';
import GraficoBairros from '../components/GraficoBairros';
import GraficoCidades from '../components/GraficoCidades';
import PDFDownload from '../components/PDFDownload';

const DashboardContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0 225px;
    display: flex;
    flex-wrap: wrap;
`;

const DashboardHeader = styled.h2`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const GraficoTitle = styled.h3`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`;

const GraficoWrapper = styled.div`
    width: 50%;
    margin-bottom: 40px;
`;

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
        <EventList />
        <DashboardHeader>Estatísticas - <PDFDownload /></DashboardHeader>
        <DashboardContainer>
            <GraficoWrapper>
                <GraficoTitle>Visitantes por Mês</GraficoTitle>
                <GraficoVisitantes />
            </GraficoWrapper>
            <GraficoWrapper>
                <GraficoTitle>Visitantes por Cidade</GraficoTitle>
                <GraficoCidades />
            </GraficoWrapper>
            <GraficoWrapper>
                <GraficoTitle>Visitantes por Bairro</GraficoTitle>
                <GraficoBairros />
            </GraficoWrapper>
            <GraficoWrapper>
                <GraficoTitle>Visitantes por Gênero</GraficoTitle>
                <GraficoGenero />
            </GraficoWrapper>
        </DashboardContainer>
    </div>
  );
}

export default Dashboard;