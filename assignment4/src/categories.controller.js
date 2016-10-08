(function () {

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  ctrl = this;
  this.categories = categories;
}

})();
