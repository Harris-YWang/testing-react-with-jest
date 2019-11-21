const domains = [
  'img10.360buyimg.com',
  'img11.360buyimg.com',
  'img12.360buyimg.com',
  'img13.360buyimg.com',
  'img14.360buyimg.com'
];

export const getImageDomain = skuId => {
  if (skuId) {
    return domains[skuId % 5];
  } else {
    return domains[Math.floor(Math.random() * 5)];
  }
};
