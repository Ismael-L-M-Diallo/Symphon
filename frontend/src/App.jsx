const titres = [ 
	{id: 0, titre: "La Retardee", album: "Paris Exposition 1937", artiste: "Les Joyaux de la Princesse"},
	{id: 1, titre: "Untitled", album: "Paris Exposition 1937", artiste: "Les Joyaux de la Princesse"},
	{id: 2, titre: "Prelude aux Feeries Nocturnes", album: "Paris Exposition 1937", artiste: "Les Joyaux de la Princesse"},	
]

function TrackCard({titre, artiste}){
	return(
		<article className="track-card">
			<h3>{titre}</h3>
			
			<p>{artiste}</p>
		</article>
		);
	}

export default function App() {
  return (
    <main>
      <h1>Symphon</h1>
      <p>Ma future app de musique.</p>
    

	<section>
	  <h2>Star Tracks </h2>
	  <div>
	  {titres.map((titreo) => (
		  <TrackCard
		  key = {titreo.id}
		  titre = {titreo.titre}
		  artiste = {titreo.artiste}
	  	/>	
	  	))}	  	
		</div>
		</section>

	  </main>



  );

}
