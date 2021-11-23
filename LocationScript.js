/* buat mengubah url lokasi*/

/* constant variables */

const SEL_COLOR = "white";
const UNSEL_COLOR = "grey";

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

const handleColor = (locs, idx) => {
  locs[idx].style.backgroundColor = SEL_COLOR;
  for (const highlighted of locs) {
    if (locs[idx] != highlighted) {
      highlighted.style.backgroundColor = UNSEL_COLOR;
    }
  }
};

const assignClick = () => {
  locs[0].style.backgroundColor = SEL_COLOR;
  for (let i = 0; i < locs.length; i++) {
    locs[i].onclick = () => {
      mapIfr.src = cabangs(i);
      handleColor(locs,i);
    };
  }
};

const mnFunc = () => {
  assignClick();
};

mnFunc();
