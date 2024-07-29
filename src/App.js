import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Geography from './scenes/geography';
import Kanban from './scenes/kanban';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className='app'>
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/gpg-admin-page' element={<Dashboard />} />
                <Route path='/gpg-admin-page/team' element={<Team />} />
                <Route path='/gpg-admin-page/contacts' element={<Contacts />} />
                <Route path='/gpg-admin-page/invoices' element={<Invoices />} />
                <Route path='/gpg-admin-page/form' element={<Form />} />
                <Route
                  path='/gpg-admin-page/kanban/:boardName'
                  element={<Kanban />}
                />
                <Route path='/gpg-admin-page/calendar' element={<Calendar />} />
                <Route path='/gpg-admin-page/faq' element={<FAQ />} />
                <Route path='/gpg-admin-page/bar' element={<Bar />} />
                <Route path='/gpg-admin-page/pie' element={<Pie />} />
                <Route path='/gpg-admin-page/line' element={<Line />} />
                <Route
                  path='/gpg-admin-page/geography'
                  element={<Geography />}
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;
