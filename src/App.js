import './App.css';
import React, { useEffect, useState} from 'react';
import Move from './Move';


//              <<****************** App function starts here ****************>>

function App() {

  //        << ************************* JS starts here  *********************** >>

  const [Sentiment,setSentiment] = useState([]); // -------> Setting outer Sentiment  😅
  const [Lyric,setLyric] = useState([]);   //  -------> Setting outer Lyric  🎹
  const [Yts , setYts] = useState([]); // -------> Setting outer Yts 🔴
  const [Keyword, setKeyword] = useState([]);   // -------> Setting outer Keywords 🔑
  const [Similar, setSimilar] = useState([]);   // -------> Setting outer Similar 🤝



  const [Endsong,setEndsong]  = useState([]);   // -------> Setting outer End song
  const [Providesent,setProvidesent] = useState([]); // sentiment

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



  //get songs for sentiment :

let happy = [{},{},{},{},{}];
let sad  = [{Name:'Nothing compares 2 u - cover Sinead O Connor cover',Link:'https://scd.dlod.link/?expire=1663510167766&p=aEENXTZ8ASl6a8B6224NClMLtAmU1CzS07RDMKjGEfazVDcM5DjbiDNaVX17-bmGNWl4Ih6ECoc_XllXN6L70jo_JL_KWRpimR0iKtvHdwLt45h3VG0CAf1X6OFnNju4KUyT9BpY1Ha1uuZYl7II3y7eha-7qrGi0NtccyNjwNJrcPbeOS6tlWyI9IHn1-zKNFGFYU3VcvgfOwY66u_kMA&s=JMKR_sRDwnONSXb3aXYclVXhMuHFu9uWOoOguRnItTY',Art:'https://i.scdn.co/image/ab67616d00001e02f27597d6dd8dfd35d4c61b50'},{Name:'Only Love Can Break Your Heart',Link:'https://scd.dlod.link/?expire=1663510480010&p=OcpcVdi4ioX06Bih5FI1jAgWyuvn6PTwfqHLlo5aTjwDELoMLlz80jhJxx7kqDBfpDIq9rxH_NdS95lu-d5tOFOwotDRmhN69Vw1zfsJc_mrZv8uf-fTdz81HMLMuOm7lXas_cY29oseMXqvyjk4aw&s=EP65OdEjtb-QJxWhr7XV1kMmZ4HDUEH4HWY0BN3XpCw',Art:'https://i.scdn.co/image/ab67616d00001e02db369330ed6f02b24f8c5f0b'},{Name:'Teardrops on My Guitar (Radio Single Remix)',Link:'https://scd.dlod.link/?expire=1663510540178&p=u_cDqJ35qCyb6AsPMAWGn5ro3Uvee_hI11MYIA5FkR2lalJ9TQeCL10yFFDHbYhYWDn2HS1SFZG5iC7_jr8ZEsuC0rRdDyEy2VxR8QHQGvBoFWX1wdyWPEt5p7_rXvt9N9k-r2VKSX2uSia6XIQsDFzXLvHJHqFE5F_zbKX0mckCVj_2i20RB9m9i4KmemWlxFbQwM1d4d_XUliQoteiMw&s=DQc18FjIqK08qpym0DrEwErPZfSTW2LcBJMMzwLDrGQ',Art:'https://i.scdn.co/image/ab67616d00001e022f8c0fd72a80a93f8c53b96c'},{Name:'I Know Its Over (2011 Remaster)',Link:'https://scd.dlod.link/?expire=1663510611307&p=USbhK-uo7WsUhptjJIR6ouJO6h4P9x15XofX8yXI6PaABHkBvI28x07Q8uNt0shjPAEtulvVnoewInmoeQPG6d-lWGi_j4g0unxsYsnECuWuSlzTKeQmLu4aoEoZvn35KRp7RseDdgrAKMqWJHbe1CYPqfok9mCNrTwOQ86iGgI&s=eHo4ln_ggZX7RFUgwaGRalCOJZ9wZRb1b-rIElrEUMA',Art:'https://i.scdn.co/image/ab67616d00001e02ada101c2e9e97feb8fae37a9'},{Name:'No Distance Left to Run',Link:'https://scd.dlod.link/?expire=1663510685703&p=wBWglO2gbBgW8wFB6wVRT8j1q1SsHx-F6dIobvqy9VI8DfOtAmmYRfM5DzghfQVZBd2qB-R3ksVZm6M2WCUBJQ6_vSnDbbMOa0ONYCT1lL40rPdIbYIfcA1j1kPYu2LYx3tGkVDIMzEsAdtyrZDUj-HkNe4OgXANgyA2Y18S9E8&s=kNoWMEUURJjTCKm23wWEBEMNvpp8qxKj8Ii3BVvuflo',Art:'https://i.scdn.co/image/ab67616d00001e0294983882a5effd77742a9f52'}];
let neutral = [{},{},{},{},{}];

useEffect(() => {
  if(Sentiment==="happy"){

    
    setProvidesent(happy[getRandomInt(6)])
  }
  if(Sentiment==="sad"){

    
    setProvidesent(sad[getRandomInt(6)])
  }
  if(Sentiment==="neutral"){

    
    setProvidesent(neutral[getRandomInt(6)])
  }

},[]);









 

  

  



  const [Search, setSearch] = useState([]);   // search values are stored here 😈 😈 😈 😈 😈 😈 😈 


  

  const click = ()=>{
    
    console.log(Search);  // function for the button 

    sentiment(Search);   //checks the sentiment of the function .. the main fucntion is below..
    lyric(Search); //checks the lyric of the function .. the main fucntion is below..
    keyword(Search); //gets the main keywords of the function .. the main fucntion is below..
    yts(Search); //gets the results of the main string.. the main fucntion is below..
    similar(Search); //gets the results of the similar things.. the main fucntion is below..
    getmusic();



  }



  //        <<    ****** API section  ******* >>

  //***************   sentiment:  😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅

  

  const sentiment = (n)=>{
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
      },
      body: '{"language":"english","text":"'+n+'"}'
    };
    
    fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response.sentiment);
        setSentiment(response.sentiment);
      })
      .catch(err => console.error("the error is from sentiment"));
      
      }
    

                //sentiment ends here  ***********************

      // lyric finder starts here ***********************🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹

      const lyric = (k)=>{


        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          }
        };
        
        fetch(`https://shazam.p.rapidapi.com/search?term=${k}&locale=en-US&offset=0&limit=5`, options)
          .then(response => response.json())
          .then(response =>{
          console.log(response.tracks.hits[0].track.title);
          console.log(response.tracks.hits[0].track.subtitle)
          let combine_string = response.tracks.hits[0].track.title + " " + response.tracks.hits[0].track.subtitle;
          setLyric(combine_string);
          
          }
          
          )
          .catch(err => console.error("the error is from lyric finder"));
          
        }
        // lyric finder ends here ***********************

        //text splitter keyword  starts here ***********************🔑 🔑 🔑 🔑

        const keyword = (l)=>{

          const options = {
            method: 'POST',
            headers: {
              'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
              'X-RapidAPI-Host': 'webit-text-analytics.p.rapidapi.com'
            }
          };
          
          fetch(`https://webit-text-analytics.p.rapidapi.com/key-phrases?text=${l}&language=en`, options)
            .then(response => response.json())
            .then(response => {
              console.log(response.data.key_phrases)
              setKeyword(response.data.key_phrases)
            })
            .catch(err => console.error("this error is from keyword "));
            
            }

            //text splitter ends here ***********************

            //yts search starts here ********************🔴🔴🔴🔴🔴🔴🔴

            const yts = (vaar)=>{
              const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
                  'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
                }
              };
              
              const yts_arr = [];
              
              
              fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${vaar}`, options)
                .then(response => response.json())
                .then(response => {
                for(var i=0;i<10;i++){
                // console.log(response.result.songs[i].title);
                yts_arr.push(response.result.songs[i].title);
                
                }
                console.log(yts_arr);
                
                setYts(yts_arr);

                       

                
                })
                .catch(err => console.error("the error is from yts finder"));
                
                }

                //yts search ends here ******************** 🔴🔴🔴🔴🔴🔴🔴


                //similar array starts here ******************** 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝

                const similar=(strrn)=>{  
                  const options = {
                    method: 'POST',
                    headers: {
                      'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
                      'X-RapidAPI-Host': 'webit-text-analytics.p.rapidapi.com'
                    }
                  };
                  
                  let similar_arr = [];
                  
                  fetch(`https://webit-text-analytics.p.rapidapi.com/match?needle_string=${strrn}&haystack_strings%5B0%5D=happy&haystack_strings%5B1%5D=sad&haystack_strings%5B2%5D=lonely&haystack_strings%5B3%5D=exited&haystack_strings%5B4%5D=rap&haystack_strings%5B5%5D=anime&haystack_strings%5B6%5D=chill&haystack_strings%5B7%5D=vibes&haystack_strings%5B8%5D=aesthetic&haystack_strings%5B9%5D=pride&haystack_strings%5B10%5D=mood&haystack_strings%5B11%5D=beautiful&haystack_strings%5B12%5D=party&haystack_strings%5B13%5D=romance&haystack_strings%5B14%5D=ambient&haystack_strings%5B15%5D=workout`, options)
                    .then(response => response.json())
                    .then(response => {
                    console.log(response.data.matches)
                    for(var i=0;i<16;i++){
                         if(response.data.matches[i].score>0.6){
                       console.log(response.data.matches[i].match)
                       similar_arr.push(response.data.matches[i].match);
                       }
                  }
                  console.log(similar_arr);
                  setSimilar(similar_arr);
                   
                    })
                    .catch(err => console.error("the error is from similar queries finder"));
                    
                    }

                     //similar array ends here ******************** 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝



            // getting Music 🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷  starts here ********************

      // const Getmusic = () =>{
      //   const options = {
      //     method: 'GET',
      //     headers: {
      //       'X-RapidAPI-Key': '377e8c583bmsh48fa1b5176f4fbbp17000fjsn01d2f730baeb',
      //       'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
      //     }
      //   };
      //   var arra = [];
    
          
      //     for (var i=0;i<3;i++){
            
      //       fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud?track=${Yts[i]}`, options)
      //         .then(response => response.json())
      //         .then(response => {
      //           console.log(response.soundcloudTrack.audio[0].url);
      //           console.log(response.spotifyTrack.name);
      //           console.log(response.spotifyTrack.album.cover[0].url);

      //           let temp_array = {Link:response.soundcloudTrack.audio[0].url,Name:response.spotifyTrack.name,Art:response.spotifyTrack.album.cover[0].url};
      //           arra.push(temp_array);
                
                     
      //         })
      //         .catch(err => console.error(err));


      //     }
       
          
      //   }
        const getmusic = ()=>{
          const endpoint = async() =>{
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '377e8c583bmsh48fa1b5176f4fbbp17000fjsn01d2f730baeb',
                'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
              }
            };
            var arra = [];
            for (var i=0;i<3;i++){
              const data = await fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud?track=${Yts[i]}`, options);
              const response = await data.json();
              let temp_array = {Link:response.soundcloudTrack.audio[0].url,Name:response.spotifyTrack.name,Art:response.spotifyTrack.album.cover[0].url};
                arra.push(temp_array);
              arra.push(temp_array);
              


            }
            
            console.log(arra);

            setEndsong(arra);
            


          }
          endpoint();
        


        }

          
            // getting Music 🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷  ENDS here ********************


            console.log(Endsong);


  //        <<    ****** API section ends ******* >>
 


  //         << ************************* JS ends here  ************************* >>



  //  👇 👇 👇    << ************************* HTML starts here  *********************** >> 👇 👇 👇
  return (
    <div className="App">

      
      <h1>Muzic</h1>   {/* heading  */}

      <input className="entry" placeholder="Search for music" type="text" onChange={(e)=>{setSearch(e.target.value)}}></input> {/* Music Search input */}
        
        <button onClick={()=>{click()}}>search</button>       {/* Music Search button */}


        <hr>
        </hr>

        {
    Endsong?.length > 0 ?(
      <div className='content'>
      {
        Endsong.map((n)=>(
          <Move card ={n}/>
        ))
      }
      </div>
    ):
    (
      <div className='empty'>
        <h2>No Songs Found</h2>
      </div>
    )

   }

   <div className='content'>
    <div className='one_song'>
    <a href={Providesent.Link}  target="blank"><img src={Providesent.Art} alt={Providesent.Name} title={Providesent.Title}></img></a>
    <h4>{Providesent.Name}</h4>
    </div>
   </div>

   

   







    </div>
    //      << ************************* HTML ends here  *********************** >>
  );
}

export default App;
