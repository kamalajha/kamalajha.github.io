console.log("Welcome to Spotify");
//initialize variables
let songIndex=0;
let audioElement=new Audio("DekhoNa.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {
        songName:"DekhoNa",filePath:"C:\VISUAL CODE\SPOTIFY\DekhoNa.mp3", coverPath:"C:\VISUAL CODE\SPOTIFY/songbg1.png",
        songName:"Vellake",filePath:"C:\VISUAL CODE\SPOTIFY\Vellake.mp3", coverPath:"C:\VISUAL CODE\SPOTIFY/songbg.png"

    }
]


//Handle play/Pause
masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused ||audioElement.currentTime<=0 ){
    audioElement.play();
   }

})

//Listen To events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    
})