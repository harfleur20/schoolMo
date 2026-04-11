import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { EtudierFrancePage } from './pages/EtudierFrancePage'
import { AccompagnementPage } from './pages/AccompagnementPage'
import { PartenariatsPage } from './pages/PartenariatsPage'
import { NotreHistoirePage } from './pages/NotreHistoirePage'
import { TemoignagesPage } from './pages/TemoignagesPage'
import { MentionsLegalesPage } from './pages/MentionsLegalesPage'
import { ConfidentialitePage } from './pages/ConfidentialitePage'
import { PageLoader } from './components/PageLoader'
import './App.css'

function App() {
  return (
    <>
      <PageLoader />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/etudier-en-france" element={<EtudierFrancePage />} />
            <Route path="/accompagnement" element={<AccompagnementPage />} />
            <Route path="/partenariats" element={<PartenariatsPage />} />
            <Route path="/notre-histoire" element={<NotreHistoirePage />} />
            <Route path="/temoignages" element={<TemoignagesPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/confidentialite" element={<ConfidentialitePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
