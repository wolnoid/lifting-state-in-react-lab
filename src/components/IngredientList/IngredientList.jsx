const IngredientList = (props) => {
  function handleSubmit(ingredient) {
    props.addToBurger ?
      props.addToBurger(ingredient)
      : props.removeFromBurger(ingredient)
  }

  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => handleSubmit(ingredient)}>
            { props.addToBurger ? '+' : 'X' }
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;