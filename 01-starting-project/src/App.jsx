
import Header from './components/header/Header'
import CoreList from './components/coreList/CoreList';
import Examples from './components/examples/Examples';

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreList/>
        <Examples/>
      </main>
    </>
  );
}