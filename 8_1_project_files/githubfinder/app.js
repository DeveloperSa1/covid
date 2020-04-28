// init gitHub & ui class

class CoronaSa {
  constructor() {
    // this.saTotalCases = saTotalCases;
    // this.new
  }

  // async function .. for fetching api

  async Summery() {
    const response = await fetch(`https://api.covid19api.com/summary
    `);
    const responseData = await response.json();
    const saProfile = responseData.Countries[195];
    const saTotalCases = saProfile.TotalConfirmed;
    const saTotalDeaths = saProfile.TotalDeaths;
    const saTotalRecovered = saProfile.TotalRecovered;
    //
    const saNewCases = saProfile.NewConfirmed;
    const saNewDeaths = saProfile.NewDeaths;
    const saNewRecovered = saProfile.NewRecovered;
    console.log(saProfile);
    return {
      saTotalCases,
      saTotalDeaths,
      saTotalRecovered,
      saNewCases,
      saNewDeaths,
      saNewRecovered,
    };
  }

  // showCases() {
  //   //  All Cases
  //   const uiNewCases = document.querySelector(".totalCases");
  //   const apiTotalCases = Summery(saTotalCases);
  //   console.log(apiTotalCases);
  //   // New cases
  //   const uiNewCases = document.querySelector(".newCases");
  //   // const apiNewCases = data.saNewCases;
  //   // show new cases
  //   // uiNewCases.innerHTML = apiNewCases;
  //   // show all cases
  //   uiTotalCases.innerHTML = apiTotalCases;
  // }
}

const coronaSa = new CoronaSa();

coronaSa.Summery().then((data) => {
  // All Cases
  const uiTotalCases = document.querySelector(".totalCases");
  const apiTotalCases = data.saTotalCases;

  const uiTotalDeaths = document.querySelector(".totalDeaths");
  const apiTotalDeaths = data.saTotalDeaths;

  const uiTotalRecovered = document.querySelector(".totalRecovered");
  const apiTotalRecovered = data.saTotalRecovered;

  // // New cases
  const uiNewCases = document.querySelector(".newCases");
  const apiNewCases = data.saNewCases;

  const uiNewDeaths = document.querySelector(".newDeaths");
  const apiNewDeaths = data.saNewDeaths;

  const uiNewRecovered = document.querySelector(".newRecovered");
  const apiNewRecovered = data.saNewRecovered;
  // show new cases
  uiNewCases.innerHTML = `<p dir="rtl" align="right">الحالات الجديده اليوم : <span class="badge badge-success">${apiNewCases}</span></p>`;
  uiNewDeaths.innerHTML = `<p dir="rtl" align="right"> وفيات اليوم  : <span class="badge badge-danger">${apiNewDeaths}</span></p>`;
  uiNewRecovered.innerHTML = `<p dir="rtl" align="right">المتعافون اليوم : <span class="badge badge-info">${apiNewRecovered}</span></p>`;
  //   // show all cases
  uiTotalCases.innerHTML = `<p dir="rtl" align="right">إجمالي عدد الحالات : <span class="badge badge-success">${apiTotalCases}</span></p>`;
  uiTotalDeaths.innerHTML = `<p dir="rtl" align="right">إجمالي عدد الوفيات : <span class="badge badge-danger">${apiTotalDeaths}</span></p>`;
  uiTotalRecovered.innerHTML = `<p dir="rtl" align="right">أجمالي عدد المتعافون : <span class="badge badge-primary">${apiTotalRecovered}</span></p>`;
  console.log(data);
});

// Search user , it's an event listener catching what the user is typing ..
// const searchUser = document.getElementById("searchUser");
// searchUser.addEventListener("keyup", (e) => {
//   // to get the actual letters that is being typed
//   const userText = e.target.value;
//   // an if statment to check if the user is really typing ..
//   if (userText !== "") {
//     // make an http call if the user is typing ..
//     Github.getUser(userText).then((data) => {
//       if (data.profile.message === "Not Found") {
//         // show alert
//         ui.showAlert("User Not found", "alert alert-danger");
//       } else {
//         // show profile
//         ui.showProfile(data.profile);
//         // show repos
//         ui.showRepos(data.repos);
//       }
//     });
//   } else {
//     // Clear Profile ..
//     ui.clearProfile();
//   }
// });
