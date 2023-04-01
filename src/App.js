import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='grid-container'>
      <Header title ="Galería de imágenes con React" />
      <div className='galeriaCols'>
        <Card url="./assets/imgs/img1.jpg" titulo="Perrito" descripcion="Animal doméstico"/>
        <Card url="./assets/imgs/img2.jpg" titulo="Zarigüeya" descripcion="Marsupial"/>
        <Card url="./assets/imgs/img3.jpg" titulo="Gatito" descripcion="Animal doméstico"/>
        <Card url="./assets/imgs/img4.jpg" titulo="Cachorro de león" descripcion="Mamífero salvaje"/>
        <Card url="./assets/imgs/img5.jpg"titulo="Araña" descripcion="Opilion"/>
        <Card url="./assets/imgs/img6.jpg" titulo="Martín pescador" descripcion="Pájaro"/>
      </div>
      <Footer texto="Todos los derechos reservados" bajada="Síguenos en redes sociales"/>
    </div>
  );
}

export default App;
