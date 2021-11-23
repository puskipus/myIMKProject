/* buat mengubah url lokasi*/

const locs = document.getElementsByClassName("location-click");
const mapIfr = document.getElementById("gmap");

const cabangs = (i) => {
  switch (i) {
    case 0:
      return DATALOC.malang;
    case 1:
      return DATALOC.jogja;
    case 2:
      return DATALOC.jakarta;
  }
};

const mnFunc = () => {
  for (let i = 0; i < locs.length; i++) {
    // console.log(locs[i]);
    locs[i].onclick = () => {
      mapIfr.src = cabangs(i);
    };
  }
};

mnFunc();