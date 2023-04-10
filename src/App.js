import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Banner from './components/banner/banner';
import ReviewsBlock from './components/reviews/reviews-block';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <ReviewsBlock />
      <Footer />
    </div>
  );
}

export default App;
