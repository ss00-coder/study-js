// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다.

let productJSON = `{"name": "마우스", "price": 25000}`;
let product = JSON.parse(productJSON);

with(console){
    log(product.name);
    log(product.price);
}
productJSON = JSON.stringify(product);

console.log(productJSON);