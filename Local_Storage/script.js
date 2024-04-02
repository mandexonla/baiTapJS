var menProducts = JSON.parse(localStorage.getItem("menProducts")) || [];
var womenProducts = JSON.parse(localStorage.getItem("womenProducts")) || [];

function showProducts(gender) {
  var products = gender === "men" ? menProducts : womenProducts;
  var html = "";
  products.forEach(function (product, index) {
    html += "<div class='card'>";
    html += "<img src='" + product.image + "' alt='product image'>";
    html += "<div class='card-body'>";
    html += "<h5 class='card-title'>" + product.name + "</h5>";
    html += "<p class='card-text'>Price: " + product.price + "</p>";
    html += "<p class='card-text'>Discount: " + product.discount + "</p>";
    html += "<button onclick='editProduct(" + index + ")'>Edit</button>";
    html += "<button onclick='deleteProduct(" + index + ")'>Delete</button>";
    html += "</div></div>";
  });
  document.getElementById("tbl").innerHTML = html;
}

function createProduct() {
  var productName = document.getElementById("productName").value;
  var productImage = document.getElementById("productImage").value;
  var productPrice = document.getElementById("productPrice").value;
  var productDiscount = document.getElementById("productDiscount").value;
  var productGender = document.getElementById("productGender").value;

  var newProduct = {
    name: productName,
    image: productImage,
    price: productPrice,
    discount: productDiscount,
  };

  if (productGender === "men") {
    menProducts.push(newProduct);
  } else if (productGender === "women") {
    womenProducts.push(newProduct);
  }

  localStorage.setItem("menProducts", JSON.stringify(menProducts));
  localStorage.setItem("womenProducts", JSON.stringify(womenProducts));

  document.getElementById("productName").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDiscount").value = "";
  showProducts(productGender);
}

function editProduct(index) {
  var productToEdit = menProducts.concat(womenProducts)[index];
  document.getElementById("editProductName").value = productToEdit.name;
  document.getElementById("editProductImage").value = productToEdit.image;
  document.getElementById("editProductPrice").value = productToEdit.price;
  document.getElementById("editProductDiscount").value = productToEdit.discount;

  document.getElementById("editForm").style.display = "block";
  document.getElementById("editForm").setAttribute("data-index", index);
}

function updateProduct() {
  var indexToUpdate = document
    .getElementById("editForm")
    .getAttribute("data-index");
  var updatedProduct = {
    name: document.getElementById("editProductName").value,
    image: document.getElementById("editProductImage").value,
    price: document.getElementById("editProductPrice").value,
    discount: document.getElementById("editProductDiscount").value,
  };

  var gender = menProducts[indexToUpdate] ? "men" : "women";
  var productsToUpdate = gender === "men" ? menProducts : womenProducts;
  productsToUpdate[indexToUpdate] = updatedProduct;

  localStorage.setItem("menProducts", JSON.stringify(menProducts));
  localStorage.setItem("womenProducts", JSON.stringify(womenProducts));

  document.getElementById("editForm").style.display = "none";
  showProducts(gender);
}

function deleteProduct(index) {
  var gender = menProducts[index] ? "men" : "women";
  var productsToDelete = gender === "men" ? menProducts : womenProducts;
  productsToDelete.splice(index, 1);

  localStorage.setItem("menProducts", JSON.stringify(menProducts));
  localStorage.setItem("womenProducts", JSON.stringify(womenProducts));

  showProducts(gender);
}

window.onload = function () {
  showProducts("men");
};
