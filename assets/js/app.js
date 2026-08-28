const cl = console.log;

const movieContainer = document.getElementById("movieContainer");
const showModelBtn = document.getElementById("showModelBtn");
const backdrop = document.getElementById("backdrop");
const movieModal = document.getElementById("movieModal");
const closeIcon = document.getElementById("closeIcon");
const closeBtn = document.getElementById("closeBtn");

let movieArray = movieArray1;

localStorage.setItem("movieArray", JSON.stringify(movieArray));

// Functions

// showOnUI

function showOnUI(arr) {
  let result = "";

  function rating(rating) {
    if (rating >= 7) {
      return "badge-success";
    } else if (rating >= 5 && rating < 7) {
      return "badge-warning";
    } else {
      return "badge-danger";
    }
  }

  arr.forEach((ele) => {
    result += `
            <div class="col-md-3 mb-3">
                <div class="card movieCard">
                    <!-- card Header -->
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${ele.original_title}</h4>
                            </div>
                            <div class="col-2">
                                <h5 class="m-0"><span class="badge ${rating(ele.vote_average)}">${ele.vote_average}</span></h5>
                            </div>
                        </div>
                    </div>

                    <!-- Card Body -->
                    <div class="card-body py-0">
                        <figure class="m-0">
                            <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" alt="${ele.original_title}" title="${ele.original_title}">
                            <figcaption>
                                <h5>${ele.original_title}</h5>
                                <p>${ele.overview}</p>
                            </figcaption>
                        </figure>
                    </div>

                    <!-- Card Footer -->
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-sm text-white net-sec-btn">Edit</button>
                            <button class="btn btn-sm net-pri-btn">Remove</button>
                        </div>
                    </div>
                </div>
            </div>`;
  });
  movieContainer.innerHTML = result;
}

showOnUI(movieArray);

// show hide 
function showHideMovieModel(event) {
    backdrop.classList.toggle("active")
    movieModal.classList.toggle("active")
}













showModelBtn.addEventListener("click", showHideMovieModel)
closeIcon.addEventListener("click", showHideMovieModel)
closeBtn.addEventListener("click", showHideMovieModel)
backdrop.addEventListener("click", showHideMovieModel)