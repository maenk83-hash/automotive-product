const products=[
  {name:'Car Lift',price:'$1200',image:'car-lift.jpg'},
  {name:'Tire Balancer',price:'$900',image:'tire-balancer.jpg'},
  {name:'Wheel Aligner',price:'$1500',image:'wheel-aligner.jpg'}
];
const c=document.getElementById('products');
products.forEach(p=>{
  let d=document.createElement('div');
  d.className='product';
  d.innerHTML=`<h2>${p.name}</h2><img src='${p.image}' width='200'><p>Price: ${p.price}</p>`;
  c.appendChild(d);
});