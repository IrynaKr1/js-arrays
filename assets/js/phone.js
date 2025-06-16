/**
 * Reprezent a phone.
@constructor
 * @param {number} id 
 * @param {string} brand - The phone brand. Can be Samsung or iPhone
 * @param {string} model - The phone model. Economy or Premium
 * @param {string} color - The phone color
 * @param {number} price - The phone price
 * @param {number} ram - The phone RAM. From 4 to 16
 * @param {number} yearOfProduction - Phone year of production
 */

function Phone(id, brand, model, color, price, ram, yearOfProduction) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;
  this.ram = ram;
  this.yearOfProduction = yearOfProduction;
}

const phones = [];
const PHONES_COUNT = 10;

for (let i = 0; i < PHONES_COUNT; i++) {
  const phone = new Phone(
    i + 1,
    Math.random() < 0.5 ? 'iPhone' : 'Samsung',
    `Series ${Math.random() > 0.5 ? 'Economy' : 'Premium'} ${
      1 + Math.trunc(Math.random() * 20)
    }`,
    Math.random() > 0.5 ? 'Black' : 'Gold',
    1000 + Math.trunc(Math.random() * 7000),
    4 + Math.trunc(Math.random() * 16),
    2017 + Math.trunc(Math.random() * 10)
  );
  phones.push(phone);
}

console.table(phones);

/**
 *
 * @param {string} brand - The phone brand
 * @param {string} color - the phone color
 */
function getPhoneImage(brand, color) {
  if (brand === 'Samsung' && color === 'Black') {
    return 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_149303596?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402';
  } else if (brand === 'Samsung' && color === 'Gold') {
    return 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_136237026?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402';
  } else if (brand === 'iPhone' && color === 'Black') {
    return 'https://ispot.pl/img/imagecache/90001-91000/680x680/1/product-media/90001-91000/Apple-iPhone-15-Pro-1TB-Black-Titanium-45514-680x680.webp';
  } else if (brand === 'iPhone' && color === 'Gold') {
    return 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/9/pr_2023_9_12_22_40_1_192_00.jpg';
  }
  return 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_149303596?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402';
}

for (let i = 0; i < phones.length; i++) {
  const phoneImage = getPhoneImage(phones[i].brand, phones[i].color);
  document.write(`
    <article class="phone-card">
      <h2 class="phone-brand">${phones[i].brand}</h2>
      <img
        src="${phoneImage}"
        alt=""
        class="phone-img"
      />
      <h3 class="phone-model">${phones[i].model}</h3>
      <section class="phone-description">
        <p>${phones[i].color}</p>
        <p>${phones[i].price} zł</p>
        <p>${phones[i].ram} GB RAM</p>
        <p>${phones[i].yearOfProduction}</p>
      </section>
    </article>
  `);
}

// Знайти середню ціну телефонів

let avgPrice = 0;
for (let i = 0; i < phones.length; i++) {
    avgPrice += phones[i].price;
}

avgPrice = Math.round(avgPrice/(phones.length));
console.log(avgPrice);