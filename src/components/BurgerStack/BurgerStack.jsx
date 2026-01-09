const BurgerStack = (props) => {
  function handleSubmit(ingredient) {
    props.removeFromBurger(ingredient)
  }

  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => handleSubmit(ingredient)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;