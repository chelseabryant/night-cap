import HomePage from "./components/HomePage";

export const Data = () => {
  const categories = [
    { title: "Classic", path: "/cocktails/classic", photo: "" },
    { title: "Vodka", path: "/cocktails/vodka", photo: "" },
    { title: "Gin", path: "/cocktails/gin", photo: "" },
    { title: "Whiskey", path: "/cocktails/whiskey", photo: "" },
    { title: "Tequila", path: "/cocktails/tequila", photo: "" },
    { title: "Rum", path: "/cocktails/rum", photo: "" },
    { title: "Scotch", path: "/cocktails/scotch", photo: "" },
    { title: "Brandy", path: "/cocktails/brandy", photo: "" },
    { title: "Spritz", path: "/cocktails/spritz", photo: "" },
  ];

  return (
    <div>
      <HomePage categories={categories}/>
    </div>
  );
};
