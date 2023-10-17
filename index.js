const formELe = document.querySelector("#searchForm");

formELe.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = formELe.elements.query.value;
  getMovieDetails(search);
});

const getMovieDetails = async (search) => {
  try {
    const config = { params: { q: search } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    renderImg(res.data);
  } catch (error) {
    console.log("error: " + error);
  }
};

const renderImg = (data) => {
  for (let item of data) {
    if (item.show.image?.medium) {
      const imgEle = document.createElement("img");
      imgEle.src = item.show.image.medium;
      document.body.append(imgEle);
    }
  }
};
