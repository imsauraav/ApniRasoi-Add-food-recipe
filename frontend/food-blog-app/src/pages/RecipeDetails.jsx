// import React from "react";
// import profileImg from "../assets/profile.png";
// import { useLoaderData } from "react-router-dom";

// export default function RecipeDetails() {
//   const recipe = useLoaderData();

//   return (
//     <div className="recipe-page">

//       {/* Header */}
//       <div className="recipe-header">
//         <img src={profileImg} />
//         <div>
//           <p>{recipe.email}</p>
//           <h2>{recipe.title}</h2>
//         </div>
//       </div>

//       {/* Image */}
//       <img
//         className="recipe-main-img"
//         src={`http://localhost:5000/images/${recipe.coverImage}`}
//       />

//       {/* Content */}
//       <div className="recipe-content">

//         <div className="recipe-box">
//           <h3>Ingredients</h3>
//           <ul>
//             {recipe.ingredients.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="recipe-box">
//           <h3>Instructions</h3>
//           <p>{recipe.instructions}</p>
//         </div>

//       </div>
//     </div>
//   );
// }




































import React from "react";
import profileImg from "../assets/profile.png";
import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {

  const recipe = useLoaderData();

  if (!recipe) {
    return <h2 style={{ textAlign: "center" }}>Recipe not found 😢</h2>;
  }

  // HANDLE STRING INGREDIENTS
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : recipe.ingredients?.split(",");

  return (
    <div className="recipe-page">

      <div className="recipe-header">
        <img src={profileImg} alt="" />
        <div>
          <p>{recipe.email || "Unknown User"}</p>
          <h2>{recipe.title || recipe.name}</h2>
        </div>
      </div>

      <img
        className="recipe-main-img"
        src={
          recipe.coverImage
            ? `http://localhost:5000/images/${recipe.coverImage}`
            : recipe.image
            ? `http://localhost:5000/${recipe.image}`
            : profileImg
        }
        alt=""
      />

      <div className="recipe-content">

        <div className="recipe-box">
          <h3>Ingredients</h3>

          <ul>
            {ingredients?.length > 0 ? (
              ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            ) : (
              <li>No ingredients found</li>
            )}
          </ul>

        </div>

        <div className="recipe-box">
          <h3>Instructions</h3>
          <p>{recipe.instructions || recipe.description || "No instructions available"}</p>
        </div>

      </div>
    </div>
  );
}