/* eslint-disable class-methods-use-this */
class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById("query");
    this._queryElement.addEventListener("change", (event) => {
      this._latestQuery = event.target.value;
      this._favoriteResto.searchResto(this._latestQuery);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery;

    const foundResto = await this._favoriteResto.searchResto(this.latestQuery);

    this._showFoundResto(foundResto);
  }

  _showFoundResto(restos) {
    const html = restos.reduce((carry, resto) => carry.concat(`<li class="resto"><span class="resto__title">${resto.title || "-"}</span></li>`), "");

    document.querySelector(".resto").innerHTML = html;
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
