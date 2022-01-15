export const getGif= async(categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria) }&limit=12&api_key=JgJH0mgsaP4N5b3UfuB6Mtqhh67pQLfB`;
    const resp = await fetch(url);
    const{ data }= await resp.json();
    const Gif = data.map(img =>(
        {
           id:img.id,
           titulo:img.title,
           url:img.images.original.url              
        }
    ))
    return Gif;
}
