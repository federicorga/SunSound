import TextBoxLanding from '../TextBoxLanding/TextBoxLanding';
import './TextBoxLandingContent.css'

function TextBoxLandingContent() {
  return (
    <section>
        <div>
            <TextBoxLanding imagen={'rectangle-5@2x.gif'} colorWords={['experiencia', 'musical', 'siempre']} h2Text={"Tu experiencia musical, para siempre"} h3Text={"Con SunSound, tu conexión con la música se vuelve tangible. Descubre, comparte y próximamente, intercambia tus pistas favoritas para que tus amigos las disfruten."}/>
        </div>
        <div>
            <TextBoxLanding applyStyle={true} imagen={'aae742e7ae143e686fa6fc69aa1d1abd-1@2x.gif'} colorWords={['Tu', 'Colección', 'Unica']} h2Text={"NFTs Musicales: Tu Colección Unica."} h3Text={"Descubre y adquiere obras digitales de artistas destacados para enriquecer tu experiencia musical.Además, interactúa con los artistas en un nivel completamente nuevo."}/>
        </div>
        <div>
            <TextBoxLanding colorWords={['Comparte']} h2Text={"Comparte tu Música"} h3Text={"Sube tus creaciones musicales y dale vida a cada nota convirtiéndola en cNFTs exclusivos. Presume ante la comunidad tus piezas únicas, mostrando cada momento de tu viaje musical."}/>
        </div>
    </section>
  );
}

export default TextBoxLandingContent;
