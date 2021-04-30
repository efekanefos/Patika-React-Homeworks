import "./App.css";
import Card from "./components/Card/Card";
import food2 from "./assets/food2.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeName = "Adana Kebap";
  const recipeItem = {
    title: "Adana Kebap",
    date: "30 Nisan 2021, Cuma",
    image: food2,
    description:
      "Adana Kebap (Kıyma), Adana'ya özgü bir kebap çeşididir. Adana Kebabı'nı diğer kebaplardan ayıran en belirgin özellik kullanılan ettir.",
  };

  const likeCount = 405;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          recipeItem={recipeItem}
          likeCount={likeCount}
          isLiked={isLiked}
          recipeName={recipeName}
          /* yukarıda değerlerini belirttiğimiz değşkenleri props ile Card Component'i içerisinde kullanabilmek için burada tanımlıyoruz. İsim konusunda karışıklık yaşanmaması adına aynı isimleri kullandım. */
        />
      </header>
    </div>
  );
}

export default App;
