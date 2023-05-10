
type SongCardProps = {
    song: string
    artist: string
    album?: string
    cover: string
}





export default function SongCard({song, artist, album, cover}: SongCardProps) {



  return (
    <div className="card ">
      <figure><img src={cover} /></figure>
      <div className="card-body p-2">
        <h2 className="card-title">{song}</h2>
        <p className="">{artist}</p>
        <p className="">{album}</p>
      </div>
    </div>
  )
}
