/* buat mengubah url lokasi*/

const locs = document.getElementsByClassName("location-click");
const map = document.getElementById('gmap')
let jogjaurl = JSON.parse("urlLokasi.json")
map.src = jogjaurl

for(let i =0; i< locs.length;i++){
    console.log(locs[i])
    locs[i].onclick = () =>{
        console.log("hello from "+i)
    }
}
