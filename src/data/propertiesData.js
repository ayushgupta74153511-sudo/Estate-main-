const propertiesData = [
  {
    id: 1,
    title: "Luxury Sky Villa",
    price: 25000000,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: 8000000,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },
];

for (let i = 3; i <= 25; i++) {
  propertiesData.push({
    id: i,
    title: `Premium Residence ${i}`,
    price: 5000000 + i * 1000000,
    type: ["Villa", "Apartment", "Penthouse", "Studio", "Duplex"][i % 5],
    image:
      "https://media.istockphoto.com/id/172152842/photo/diwali-in-india.jpg?s=2048x2048&w=is&k=20&c=sCHZseZNFWSaIi34jSDWa5prVrjcmL94hVeHx7rgdtY=",
  });
}

export default propertiesData;