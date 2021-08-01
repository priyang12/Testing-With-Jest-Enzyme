import './App.css';
import Header from './components/Header';
import Mainsection from './components/Mainsection';
import img from './image/pic.jpg';

function App() {
  const temparry = [
    {
      fName: 'dsdas',
      lName: 'patle',
      email: 'dsadsa@ds.com',
    },
  ];
  return (
    <div className='App' data-test='AppComponent'>
      <Header />
      <Mainsection
        title={'Life is Just a Simple game of not Getting Fu****d'}
        temparr={temparry}
        image={img}
        desc={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque magnam quibusdam autem debitis asperiores voluptates perferendis consectetur aperiam dicta eius, dolor dolores error quam beatae ullam, iste ratione. Exercitationem.'
        }
      />
    </div>
  );
}

export default App;
